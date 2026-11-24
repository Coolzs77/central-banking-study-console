import React, { useState } from 'react';
import { CENTRAL_BANKING_KEYWORDS } from '../../data/keywords';

interface MarkdownViewerProps {
  content: string;
  maskKeywords?: boolean;
  onToggleClozeAll?: boolean;
}

// Compile keyword regex once: sorted descending by length so longer multi-word terms match first
const ESCAPED_KEYWORDS = CENTRAL_BANKING_KEYWORDS.slice()
  .sort((a, b) => b.length - a.length)
  .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

const KEYWORD_REGEX = new RegExp(`(${ESCAPED_KEYWORDS.join('|')})`, 'g');

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({
  content,
  maskKeywords = false,
  onToggleClozeAll = false,
}) => {
  const [revealedSet, setRevealedSet] = useState<Set<number>>(new Set());

  // Reset revealed set when maskKeywords turns off
  React.useEffect(() => {
    if (!maskKeywords) {
      setRevealedSet(new Set());
    }
  }, [maskKeywords]);

  let globalClozeIdx = 0;

  const toggleCloze = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setRevealedSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  /**
   * Scans a piece of text for financial keywords and renders them with highlights or cloze buttons
   */
  const renderTextSegmentWithKeywords = (
    text: string,
    isParentBold: boolean = false,
    keyPrefix: string = 'kw'
  ) => {
    if (!text) return null;

    // Split by known financial keywords
    const parts = text.split(KEYWORD_REGEX);

    return parts.map((part, pIdx) => {
      if (!part) return null;

      const isKeyword = CENTRAL_BANKING_KEYWORDS.includes(part);

      if (isKeyword) {
        const clozeId = globalClozeIdx++;
        const isRevealed = !maskKeywords || onToggleClozeAll || revealedSet.has(clozeId);

        if (!isRevealed) {
          return (
            <button
              key={`${keyPrefix}-${pIdx}`}
              type="button"
              onClick={(e) => toggleCloze(clozeId, e)}
              title="点击揭开关键词"
              className="inline-flex items-center px-2 py-0.5 mx-1 my-0.5 rounded-lg bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/60 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-300 dark:border-blue-700 transition cursor-pointer shadow-xs active:scale-95 select-none"
            >
              <span className="opacity-50 mr-0.5">[</span>
              <span>··· 揭开</span>
              <span className="opacity-50 ml-0.5">]</span>
            </button>
          );
        }

        return (
          <strong
            key={`${keyPrefix}-${pIdx}`}
            onClick={(e) => maskKeywords && toggleCloze(clozeId, e)}
            className={`font-bold px-1.5 py-0.5 mx-0.5 rounded transition-all ${
              maskKeywords
                ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 cursor-pointer shadow-xs'
                : 'bg-blue-50/90 dark:bg-blue-950/60 text-blue-800 dark:text-blue-200 border-b-2 border-blue-400 dark:border-blue-500'
            }`}
            title={maskKeywords ? '点击重新遮挡' : undefined}
          >
            {part}
          </strong>
        );
      }

      // Normal non-keyword text
      if (isParentBold) {
        return (
          <strong key={`${keyPrefix}-${pIdx}`} className="font-bold text-slate-900 dark:text-slate-100">
            {part}
          </strong>
        );
      }

      return <span key={`${keyPrefix}-${pIdx}`}>{part}</span>;
    });
  };

  /**
   * Processes a line with **bold** markers and *italic* markers
   */
  const renderInlineFormatted = (text: string) => {
    // 1. Check for ==N== tags at the end of line (e.g. \t==4==)
    const tagMatch = text.match(/\t*==(\d+)==/);
    let mainText = text;
    let badgeNum: string | null = null;
    if (tagMatch) {
      mainText = text.replace(/\t*==(\d+)==/, '');
      badgeNum = tagMatch[1];
    } else {
      mainText = text.replace(/\t*==\d+==/g, '');
    }

    // 2. Split by **...** tokens
    const boldTokens = mainText.split(/(\*\*[^*]+\*\*)/g);

    return (
      <span className="leading-relaxed">
        {boldTokens.map((segment, i) => {
          if (segment.startsWith('**') && segment.endsWith('**') && segment.length >= 4) {
            const rawWord = segment.slice(2, -2);

            // If rawWord is a short term (<= 15 chars without punctuation): treat as explicit author-defined key phrase
            const isShortTerm =
              rawWord.length <= 15 &&
              !rawWord.includes('。') &&
              !rawWord.includes('；') &&
              !rawWord.endsWith('：');

            if (isShortTerm) {
              const clozeId = globalClozeIdx++;
              const isRevealed = !maskKeywords || onToggleClozeAll || revealedSet.has(clozeId);

              if (!isRevealed) {
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => toggleCloze(clozeId, e)}
                    title="点击揭开关键词"
                    className="inline-flex items-center px-2 py-0.5 mx-1 my-0.5 rounded-lg bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/60 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-300 dark:border-blue-700 transition cursor-pointer shadow-xs active:scale-95 select-none"
                  >
                    <span className="opacity-50 mr-0.5">[</span>
                    <span>··· 揭开</span>
                    <span className="opacity-50 ml-0.5">]</span>
                  </button>
                );
              }

              return (
                <strong
                  key={i}
                  onClick={(e) => maskKeywords && toggleCloze(clozeId, e)}
                  className={`font-bold px-1.5 py-0.5 mx-0.5 rounded transition-all ${
                    maskKeywords
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 cursor-pointer shadow-xs'
                      : 'bg-blue-50/90 dark:bg-blue-950/60 text-blue-800 dark:text-blue-200 border-b-2 border-blue-400 dark:border-blue-500'
                  }`}
                  title={maskKeywords ? '点击重新遮挡' : undefined}
                >
                  {rawWord}
                </strong>
              );
            }

            // Otherwise, it was a whole lead sentence wrapped in **...**
            // Render it as bold lead text and scan it for actual financial keywords
            return (
              <React.Fragment key={i}>
                {renderTextSegmentWithKeywords(rawWord, true, `bold-${i}`)}
              </React.Fragment>
            );
          }

          // Non-bold segment: check for *italic* markers
          const italicTokens = segment.split(/(\*[^*]+\*)/g);
          return (
            <React.Fragment key={i}>
              {italicTokens.map((part, j) => {
                if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
                  const rawItalic = part.slice(1, -1);
                  return (
                    <span
                      key={j}
                      className="font-semibold text-slate-800 dark:text-slate-200"
                    >
                      {renderTextSegmentWithKeywords(rawItalic, false, `it-${i}-${j}`)}
                    </span>
                  );
                }
                return (
                  <React.Fragment key={j}>
                    {renderTextSegmentWithKeywords(part, false, `txt-${i}-${j}`)}
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        })}

        {/* Retain "共 N 点" badge */}
        {badgeNum && (
          <span className="ml-2.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700 shadow-xs align-middle select-none">
            共 {badgeNum} 点
          </span>
        )}
      </span>
    );
  };

  const lines = content.split('\n');

  return (
    <div className="space-y-3 text-slate-700 dark:text-slate-300">
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        // Check indentation level
        const leadingSpaces = line.search(/\S|$/);
        const isLevel2 = leadingSpaces >= 4 || line.startsWith('    -');
        const isLevel1 = (leadingSpaces >= 2 && leadingSpaces < 4) || line.startsWith('  -');
        const isLevel0 = !isLevel1 && !isLevel2;

        let cleanText = trimmed;
        if (cleanText.startsWith('- ')) {
          cleanText = cleanText.slice(2);
        }

        // Subheading style: lines like *（一）市场经济的迅速发展* or （二）统一银行券发行的需要
        const isSubheading =
          /^[\\*]*[（\(][一二三四五六七八九十0-9]+[）\)][^\\*]*[\\*]*/.test(cleanText) ||
          (/^\*[^*]+\*$/.test(cleanText) && !cleanText.includes('**'));

        if (isSubheading) {
          const subTitle = cleanText.replace(/^\*+|\*+$/g, '');
          return (
            <div
              key={lineIdx}
              className="mt-4 mb-2 p-2.5 px-3.5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/80 flex items-center justify-between gap-3 shadow-xs transition-all"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0 shadow-xs"></span>
                <h4 className="font-extrabold text-indigo-950 dark:text-indigo-100 text-[15px] sm:text-[15.5px] tracking-tight truncate">
                  {subTitle}
                </h4>
              </div>
              <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 bg-white dark:bg-indigo-900/60 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-700/60 shrink-0 shadow-xs">
                背诵核心概括
              </span>
            </div>
          );
        }

        // Level 0: Introductory sentence
        if (isLevel0) {
          return (
            <div
              key={lineIdx}
              className="p-3.5 bg-slate-50/90 dark:bg-slate-900/50 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-[14.5px] font-medium text-slate-800 dark:text-slate-200 shadow-xs"
            >
              {renderInlineFormatted(cleanText)}
            </div>
          );
        }

        // Level 1 & Level 2 Bullet Items
        return (
          <div
            key={lineIdx}
            className={`flex items-start gap-2.5 text-[14px] leading-relaxed ${
              isLevel2 ? 'pl-5 py-1 text-slate-700 dark:text-slate-300' : 'pl-2 py-0.5'
            }`}
          >
            <span className="text-blue-500 dark:text-blue-400 mt-1.5 select-none text-xs font-mono shrink-0">
              •
            </span>
            <div className="flex-1 min-w-0">{renderInlineFormatted(cleanText)}</div>
          </div>
        );
      })}
    </div>
  );
};
