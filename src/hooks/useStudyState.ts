import { useState, useEffect, useCallback } from 'react';
import { UserMasteryState, ExamRecord } from '../data/types';
import { syncService } from '../services/syncService';

const STORAGE_KEY = 'cb_study_state_v2';

const defaultState: UserMasteryState = {
  memorized: [],
  starred: [],
  homeworkCompleted: [],
  termMemorized: [],
  termStarred: [],
  choiceMemorized: [],
  choiceStarred: [],
  tfMemorized: [],
  tfStarred: [],
  fillMemorized: [],
  fillStarred: [],
  examHistory: [],
};

function normalizeState(parsed: Partial<UserMasteryState> | null | undefined): UserMasteryState {
  if (!parsed) return defaultState;
  return {
    memorized: Array.isArray(parsed.memorized) ? parsed.memorized : [],
    starred: Array.isArray(parsed.starred) ? parsed.starred : [],
    homeworkCompleted: Array.isArray(parsed.homeworkCompleted) ? parsed.homeworkCompleted : [],
    termMemorized: Array.isArray(parsed.termMemorized) ? parsed.termMemorized : [],
    termStarred: Array.isArray(parsed.termStarred) ? parsed.termStarred : [],
    choiceMemorized: Array.isArray(parsed.choiceMemorized) ? parsed.choiceMemorized : [],
    choiceStarred: Array.isArray(parsed.choiceStarred) ? parsed.choiceStarred : [],
    tfMemorized: Array.isArray(parsed.tfMemorized) ? parsed.tfMemorized : [],
    tfStarred: Array.isArray(parsed.tfStarred) ? parsed.tfStarred : [],
    fillMemorized: Array.isArray(parsed.fillMemorized) ? parsed.fillMemorized : [],
    fillStarred: Array.isArray(parsed.fillStarred) ? parsed.fillStarred : [],
    examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : [],
  };
}

export function useStudyState() {
  const [state, setState] = useState<UserMasteryState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return normalizeState(JSON.parse(stored));
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

  const toggleIdInField = useCallback(
    (
      field:
        | 'termStarred'
        | 'choiceMemorized'
        | 'choiceStarred'
        | 'tfMemorized'
        | 'tfStarred'
        | 'fillMemorized'
        | 'fillStarred',
      id: number
    ) => {
      setState((prev) => {
        const list = Array.isArray(prev[field]) ? (prev[field] as number[]) : [];
        const exists = list.includes(id);
        return {
          ...prev,
          [field]: exists ? list.filter((item) => item !== id) : [...list, id],
        };
      });
    },
    []
  );

  const toggleTermStarred = useCallback((id: number) => toggleIdInField('termStarred', id), [toggleIdInField]);
  const toggleChoiceMemorized = useCallback((id: number) => toggleIdInField('choiceMemorized', id), [toggleIdInField]);
  const toggleChoiceStarred = useCallback((id: number) => toggleIdInField('choiceStarred', id), [toggleIdInField]);
  const toggleTfMemorized = useCallback((id: number) => toggleIdInField('tfMemorized', id), [toggleIdInField]);
  const toggleTfStarred = useCallback((id: number) => toggleIdInField('tfStarred', id), [toggleIdInField]);
  const toggleFillMemorized = useCallback((id: number) => toggleIdInField('fillMemorized', id), [toggleIdInField]);
  const toggleFillStarred = useCallback((id: number) => toggleIdInField('fillStarred', id), [toggleIdInField]);

  const addExamRecord = useCallback((record: ExamRecord) => {
    setState((prev) => ({
      ...prev,
      examHistory: [record, ...prev.examHistory],
    }));
  }, []);

  const importState = useCallback((newState: UserMasteryState) => {
    setState(normalizeState(newState));
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
    toggleTermStarred,
    toggleChoiceMemorized,
    toggleChoiceStarred,
    toggleTfMemorized,
    toggleTfStarred,
    toggleFillMemorized,
    toggleFillStarred,
    addExamRecord,
    importState,
    resetAllProgress,
  };
}
