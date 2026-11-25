import React, { useState, useEffect } from 'react';
import {
  Search,
  Timer,
  Play,
  Pause,
  RotateCcw,
  Sun,
  Moon,
  RefreshCw,
  X,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenSync: () => void;
  onToggleMobileMenu?: () => void;
  isLeftCollapsed?: boolean;
  onToggleLeftCollapsed?: () => void;
  activeMode: string;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onOpenSync,
  onToggleMobileMenu,
  isLeftCollapsed = false,
  onToggleLeftCollapsed,
}) => {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    return document.documentElement.classList.contains('dark');
  });

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('cb_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('cb_theme', 'light');
    }
  };

  // Focus Timer / Stopwatch
  const [timerMode, setTimerMode] = useState<'stopwatch' | 'pomodoro'>('stopwatch');
  const [seconds, setSeconds] = useState<number>(0);
  const [pomodoroSeconds, setPomodoroSeconds] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showTimerMenu, setShowTimerMenu] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (isRunning) {
      interval = setInterval(() => {
        if (timerMode === 'stopwatch') {
          setSeconds((s) => s + 1);
        } else {
          setPomodoroSeconds((s) => {
            if (s <= 1) {
              setIsRunning(false);
              return 0;
            }
            return s - 1;
          });
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timerMode]);

  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    if (timerMode === 'stopwatch') {
      setSeconds(0);
    } else {
      setPomodoroSeconds(25 * 60);
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-white/75 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Mobile Menu Trigger + Brand Title (Strictly clean, zero marketing fluff) */}
        <div className="flex items-center gap-3">
          {onToggleMobileMenu && (
            <button
              onClick={onToggleMobileMenu}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              title="切换章节导航"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          {onToggleLeftCollapsed && (
            <button
              onClick={onToggleLeftCollapsed}
              aria-label={isLeftCollapsed ? '展开左侧导航栏' : '折叠左侧导航栏'}
              title={isLeftCollapsed ? '展开左侧栏' : '折叠左侧栏'}
              className="hidden md:inline-flex p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              {isLeftCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
            </button>
          )}

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-500 text-white flex items-center justify-center font-bold text-lg clay-button-shadow select-none">
              央
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              中央银行学
            </h1>
          </div>
        </div>

        {/* Center: Global Search Input */}
        <div className="flex-1 max-w-md hidden sm:block relative">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="搜索题目、关键词 (按 / 聚焦)..."
              className="w-full pl-10 pr-9 py-1.5 text-sm rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all clay-inset-groove"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right Tools: Focus Timer, Theme, Multi-device Sync */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Focus Timer / Stopwatch */}
          <div className="relative">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 text-xs font-mono font-medium clay-badge-shadow">
              <button
                onClick={() => setShowTimerMenu(!showTimerMenu)}
                className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                title="点击切换计时模式"
              >
                <Timer className="w-3.5 h-3.5 text-sky-500" />
                <span>
                  {timerMode === 'stopwatch'
                    ? formatTime(seconds)
                    : formatTime(pomodoroSeconds)}
                </span>
              </button>

              <button
                onClick={() => setIsRunning(!isRunning)}
                className="p-1 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400"
                title={isRunning ? '暂停计时' : '开始计时'}
              >
                {isRunning ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5" />
                )}
              </button>

              <button
                onClick={handleResetTimer}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                title="重置计时"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* Timer mode popover */}
            {showTimerMenu && (
              <div className="absolute right-0 mt-2 w-48 p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl z-50 text-xs">
                <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1.5 px-2">
                  计时模式
                </div>
                <button
                  onClick={() => {
                    setTimerMode('stopwatch');
                    setIsRunning(false);
                    setSeconds(0);
                    setShowTimerMenu(false);
                  }}
                  className={`w-full text-left px-2 py-1.5 rounded-lg transition-colors ${
                    timerMode === 'stopwatch'
                      ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 font-medium'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  正向计时器 (学习用时)
                </button>
                <button
                  onClick={() => {
                    setTimerMode('pomodoro');
                    setIsRunning(false);
                    setPomodoroSeconds(25 * 60);
                    setShowTimerMenu(false);
                  }}
                  className={`w-full text-left px-2 py-1.5 rounded-lg transition-colors ${
                    timerMode === 'pomodoro' && pomodoroSeconds === 25 * 60
                      ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 font-medium'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  番茄钟 (25分钟专注)
                </button>
                <button
                  onClick={() => {
                    setTimerMode('pomodoro');
                    setIsRunning(false);
                    setPomodoroSeconds(45 * 60);
                    setShowTimerMenu(false);
                  }}
                  className={`w-full text-left px-2 py-1.5 rounded-lg transition-colors ${
                    timerMode === 'pomodoro' && pomodoroSeconds === 45 * 60
                      ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 font-medium'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  长专注 (45分钟)
                </button>
              </div>
            )}
          </div>

          {/* Multi-device Sync Button */}
          <button
            onClick={onOpenSync}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 clay-button-shadow clay-squash"
            title="跨设备同步与数据备份"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 clay-button-shadow clay-squash"
            title={isDark ? '切换至明亮模式' : '切换至暗黑模式'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
