import { useState, useEffect, useCallback } from 'react';
import { UserMasteryState, ExamRecord } from '../data/types';
import { syncService } from '../services/syncService';

const STORAGE_KEY = 'cb_study_state_v2';

const defaultState: UserMasteryState = {
  memorized: [],
  starred: [],
  homeworkCompleted: [],
  termMemorized: [],
  examHistory: [],
};

export function useStudyState() {
  const [state, setState] = useState<UserMasteryState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          memorized: Array.isArray(parsed.memorized) ? parsed.memorized : [],
          starred: Array.isArray(parsed.starred) ? parsed.starred : [],
          homeworkCompleted: Array.isArray(parsed.homeworkCompleted) ? parsed.homeworkCompleted : [],
          termMemorized: Array.isArray(parsed.termMemorized) ? parsed.termMemorized : [],
          examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : [],
        };
      }
    } catch (e) {
      console.error('Failed to load study state:', e);
    }
    return defaultState;
  });

  // Save to localStorage & trigger sync on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      syncService.triggerAutoSync(state);
      syncService.broadcastLocalChange(state);
    } catch (e) {
      console.error('Failed to persist study state:', e);
    }
  }, [state]);

  // Listen for BroadcastChannel updates from other tabs
  useEffect(() => {
    syncService.registerExternalUpdateHandler((incoming) => {
      setState((prev) => ({
        ...prev,
        ...incoming,
      }));
    });
  }, []);

  const toggleMemorized = useCallback((id: number) => {
    setState((prev) => {
      const isMem = prev.memorized.includes(id);
      return {
        ...prev,
        memorized: isMem
          ? prev.memorized.filter((item) => item !== id)
          : [...prev.memorized, id],
      };
    });
  }, []);

  const toggleStarred = useCallback((id: number) => {
    setState((prev) => {
      const isStar = prev.starred.includes(id);
      return {
        ...prev,
        starred: isStar
          ? prev.starred.filter((item) => item !== id)
          : [...prev.starred, id],
      };
    });
  }, []);

  const toggleHomeworkCompleted = useCallback((id: number) => {
    setState((prev) => {
      const isDone = prev.homeworkCompleted.includes(id);
      return {
        ...prev,
        homeworkCompleted: isDone
          ? prev.homeworkCompleted.filter((item) => item !== id)
          : [...prev.homeworkCompleted, id],
      };
    });
  }, []);

  const toggleTermMemorized = useCallback((id: number) => {
    setState((prev) => {
      const isDone = prev.termMemorized.includes(id);
      return {
        ...prev,
        termMemorized: isDone
          ? prev.termMemorized.filter((item) => item !== id)
          : [...prev.termMemorized, id],
      };
    });
  }, []);

  const addExamRecord = useCallback((record: ExamRecord) => {
    setState((prev) => ({
      ...prev,
      examHistory: [record, ...prev.examHistory],
    }));
  }, []);

  const importState = useCallback((newState: UserMasteryState) => {
    setState(newState);
  }, []);

  const resetAllProgress = useCallback(() => {
    if (window.confirm('确定要清空所有背诵、作业和做题记录吗？')) {
      setState(defaultState);
    }
  }, []);

  return {
    state,
    toggleMemorized,
    toggleStarred,
    toggleHomeworkCompleted,
    toggleTermMemorized,
    addExamRecord,
    importState,
    resetAllProgress,
  };
}
