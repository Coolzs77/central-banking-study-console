import { useState, useEffect, useCallback } from 'react';
import { MasteryStatus, UserMasteryState, ExamRecord } from '../data/types';

const STORAGE_KEY = 'cb_study_state_v1';

const defaultState: UserMasteryState = {
  mastery: {},
  starred: [],
  homeworkCompleted: [],
  examHistory: [],
  termMastery: {},
};

export function useStudyState() {
  const [state, setState] = useState<UserMasteryState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...defaultState, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.error('Failed to load study state from localStorage:', e);
    }
    return defaultState;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to persist study state:', e);
    }
  }, [state]);

  const setMastery = useCallback((id: number, status: MasteryStatus) => {
    setState((prev) => {
      const nextMastery = { ...prev.mastery };
      if (nextMastery[id] === status) {
        // Toggle back to unlearned if clicking the same status
        delete nextMastery[id];
      } else {
        nextMastery[id] = status;
      }
      return { ...prev, mastery: nextMastery };
    });
  }, []);

  const toggleStar = useCallback((id: number) => {
    setState((prev) => {
      const exists = prev.starred.includes(id);
      return {
        ...prev,
        starred: exists ? prev.starred.filter((i) => i !== id) : [...prev.starred, id],
      };
    });
  }, []);

  const toggleHomework = useCallback((id: number) => {
    setState((prev) => {
      const exists = prev.homeworkCompleted.includes(id);
      return {
        ...prev,
        homeworkCompleted: exists
          ? prev.homeworkCompleted.filter((i) => i !== id)
          : [...prev.homeworkCompleted, id],
      };
    });
  }, []);

  const toggleTermMastery = useCallback((id: number) => {
    setState((prev) => ({
      ...prev,
      termMastery: {
        ...prev.termMastery,
        [id]: !prev.termMastery[id],
      },
    }));
  }, []);

  const saveExamRecord = useCallback((record: ExamRecord) => {
    setState((prev) => ({
      ...prev,
      examHistory: [record, ...prev.examHistory],
    }));
  }, []);

  const resetAllState = useCallback(() => {
    if (window.confirm('确定要清空全部学习进度和做题记录吗？此操作无法恢复。')) {
      setState(defaultState);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const exportBase64State = useCallback(() => {
    try {
      const json = JSON.stringify(state);
      return btoa(encodeURIComponent(json));
    } catch (e) {
      console.error('Failed to export state to Base64:', e);
      return '';
    }
  }, [state]);

  const importBase64State = useCallback((base64String: string): boolean => {
    try {
      const json = decodeURIComponent(atob(base64String.trim()));
      const parsed = JSON.parse(json);
      if (typeof parsed === 'object' && parsed !== null) {
        setState({
          mastery: parsed.mastery || {},
          starred: Array.isArray(parsed.starred) ? parsed.starred : [],
          homeworkCompleted: Array.isArray(parsed.homeworkCompleted) ? parsed.homeworkCompleted : [],
          examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : [],
          termMastery: parsed.termMastery || {},
        });
        return true;
      }
    } catch (e) {
      console.error('Failed to import state from Base64:', e);
    }
    return false;
  }, []);

  return {
    state,
    setMastery,
    toggleStar,
    toggleHomework,
    toggleTermMastery,
    saveExamRecord,
    resetAllState,
    exportBase64State,
    importBase64State,
  };
}
