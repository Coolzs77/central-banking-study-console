import React, { useState } from 'react';
import { CENTRAL_BANKING_KEYWORDS } from '../../data/keywords';

interface MarkdownViewerProps {
  content: string;
  keywords?: string[];
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
  keywords,
  maskKeywords = false,
  onToggleClozeAll = false,
}) => {
  const [revealedSet, setRevealedSet] = useState<Set<number>>(new Set());

  // Memoize active keywords and regex if custom keywords provided
  const activeKeywords = React.useMemo(() => {
    if (keywords && keywords.length > 0) {
      return keywords.slice().sort((a, b) => b.length - a.length);
    }
    return CENTRAL_BANKING_KEYWORDS;
  }, [keywords]);

  const activeRegex = React.useMemo(() => {
    if (keywords && keywords.length > 0) {
      const escaped = activeKeywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      return new RegExp(`(${escaped.join('|')})`, 'g');
    }
    return KEYWORD_REGEX;
  }, [activeKeywords, keywords]);

  // Reset revealed set when maskKeywords turns off
  React.useEffect(() => {
    if (!maskKeywords) {
      setRevealedSet(new Set());
    }
  }, [maskKeywords]);

  let globalClozeIdx = 0;

  const toggleCloze = (idx: number, e: React.SyntheticEvent) => {
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

  const handleClozeKeyDown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCloze(idx, e);
    }
  };

  /**
   * Scans a piece of text for financial keywords.
   * - Paragraph keywords use NORMAL high-contrast font (NOT green).
   * - In cloze masking mode, applies a soft shadow/blur mask directly over the keyword (NO text replacement like ...揭开).
   */
  const renderTextSegmentWithKeywords = (
    text: string,
    isParentBold: boolean = false,
    keyPrefix: string = 'kw'
  ) => {
    if (!text) return null;

    // Split by known financial keywords
    const parts = text.split(activeRegex);

    return parts.map((part, pIdx) => {
      if (!part) return null;

      const isKeyword = activeKeywords.includes(part);

      if (isKeyword) {
        const clozeId = globalClozeIdx++;
        const isRevealed = !maskKeywords || onToggleClozeAll || revealedSet.has(clozeId);

        // When masked: apply cute washi tape (贴纸胶带) overlay directly over the word
        if (!isRevealed) {
          return (
            <span
              key={`${keyPrefix}-${pIdx}`}
              role="button"
              tabIndex={0}
              aria-pressed={isRevealed}
              onClick={(e) => toggleCloze(clozeId, e)}
              onKeyDown={(e) => handleClozeKeyDown(clozeId, e)}
              title="点击撕开胶带"
              className="inline-flex items-center justify-center relative mx-1 px-1.5 py-0.5 rounded cursor-pointer select-none transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97] align-baseline shadow-xs"
              style={{
                background:
                  'repeating-linear-gradient(135deg, rgba(254, 215, 170, 0.95) 0px, rgba(254, 215, 170, 0.95) 6px, rgba(251, 207, 232, 0.95) 6px, rgba(251, 207, 232, 0.95) 12px)',
                boxShadow:
                  '0 1px 2px rgba(244, 63, 94, 0.15), inset 0 0 0 1px rgba(244, 114, 182, 0.35)',
                borderRadius: '3px',
                verticalAlign: 'baseline',
              }}
            >
              <span className="opacity-0 select-none pointer-events-none font-bold inline-block leading-normal">
                {part}
              </span>
              <span className="absolute inset-0 flex items-center justify-center text-[10px] text-rose-400/80 font-bold pointer-events-none select-none tracking-widest">
                ···
              </span>
            </span>
          );
        }

        // When revealed / normal: Tier 3 core scoring keyword in rose-pink
        return (
          <strong
            key={`${keyPrefix}-${pIdx}`}
            onClick={(e) => maskKeywords && toggleCloze(clozeId, e)}
            className={`font-semibold text-rose-600 dark:text-rose-400 transition-colors ${
              maskKeywords ? 'cursor-pointer hover:opacity-75' : ''
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
            const nextSeg = boldTokens[i + 1] || '';
            const isFollowedByColon = /^[：:]/.test(nextSeg);
            const isLeadPhrase = isFollowedByColon || rawWord.endsWith('：') || rawWord.endsWith(':');

            // Tier 2: Bold lead phrase immediately followed by colon (e.g. **融资效果相同**：)
            // Rendered in calm indigo bold and NEVER masked by washi tape
            if (isLeadPhrase) {
              return (
                <strong
                  key={i}
                  className="font-bold text-indigo-700 dark:text-indigo-300"
                >
                  {rawWord}
                </strong>
              );
            }

            // Tier 3: Short explicit bold term -> rose-pink & maskable with washi tape
            const isShortTerm =
              rawWord.length <= 15 &&
              !rawWord.includes('。') &&
              !rawWord.includes('；');

            if (isShortTerm) {
              const clozeId = globalClozeIdx++;
              const isRevealed = !maskKeywords || onToggleClozeAll || revealedSet.has(clozeId);

              // When masked: apply cute washi tape (贴纸胶带) overlay over the keyword
              if (!isRevealed) {
                return (
                  <span
                    key={i}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isRevealed}
                    onClick={(e) => toggleCloze(clozeId, e)}
                    onKeyDown={(e) => handleClozeKeyDown(clozeId, e)}
                    title="点击撕开胶带"
                    className="inline-flex items-center justify-center relative mx-1 px-1.5 py-0.5 rounded cursor-pointer select-none transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97] align-baseline shadow-xs"
                    style={{
                      background:
                        'repeating-linear-gradient(135deg, rgba(254, 215, 170, 0.95) 0px, rgba(254, 215, 170, 0.95) 6px, rgba(251, 207, 232, 0.95) 6px, rgba(251, 207, 232, 0.95) 12px)',
                      boxShadow:
                        '0 1px 2px rgba(244, 63, 94, 0.15), inset 0 0 0 1px rgba(244, 114, 182, 0.35)',
                      borderRadius: '3px',
                      verticalAlign: 'baseline',
                    }}
                  >
                    <span className="opacity-0 select-none pointer-events-none font-bold inline-block leading-normal">
                      {rawWord}
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] text-rose-400/80 font-bold pointer-events-none select-none tracking-widest">
                      ···
                    </span>
                  </span>
                );
              }

              // When revealed / normal: Tier 3 rose-pink font
              return (
                <strong
                  key={i}
                  onClick={(e) => maskKeywords && toggleCloze(clozeId, e)}
                  className={`font-semibold text-rose-600 dark:text-rose-400 transition-colors ${
                    maskKeywords ? 'cursor-pointer hover:opacity-75' : ''
                  }`}
                  title={maskKeywords ? '点击重新遮挡' : undefined}
                >
                  {rawWord}
                </strong>
              );
            }

            // Otherwise, it was a lead sentence wrapped in **...**
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

        {/* Retain "共 N 点" indicator */}
        {badgeNum && (
          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800 select-none align-middle">
            共 {badgeNum} 点
          </span>
        )}
      </span>
    );
  };

  const lines = content.split('\n');

  return (
    <div className="space-y-2 text-slate-700 dark:text-slate-300">
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

        // Tier 4: Source / intro line (e.g. 根据课件... / 根据教材...) -> soft secondary gray & SKIP keyword scanning
        if (/^(根据课件|根据教材)/.test(cleanText)) {
          const tagMatch = cleanText.match(/\t*==(\d+)==/);
          const badgeNum = tagMatch ? tagMatch[1] : null;
          const sourceDisplay = cleanText
            .replace(/\t*==\d+==/g, '')
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/\*([^*]+)\*/g, '$1');
          return (
            <div
              key={lineIdx}
              className="text-[13.5px] text-slate-500 dark:text-slate-400 leading-relaxed mb-2"
            >
              <span>{sourceDisplay}</span>
              {badgeNum && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800 select-none align-middle">
                  共 {badgeNum} 点
                </span>
              )}
            </div>
          );
        }

        // Check if line contains a middle colon followed by explanatory content (inline summary with body)
        const hasColonWithBody = /[:：].+$/.test(cleanText);

        // Inline Summary Pattern: lines like "1. **概括要点**：详细解释..." or "（一）概括：详细解释..." or "概括要点：详细解释..."
        // Applied ONLY when NOT an already indented child sub-bullet (!isLevel2) and NOT a Tier 2 bold lead phrase (**...**：)
        if (!isLevel2 && hasColonWithBody) {
          const inlineSummaryMatch = cleanText.match(
            /^([（\(][一二三四五六七八九十0-9]+[）\)][^：:]{1,30}|\d+[\.、]\s*\*\*[^*]+\*\*|\d+[\.、]\s*[^：:]{1,30}|[一二三四五六七八九十]+[、.][^：:]{1,30}|\*[^*]+\*|[^*。；\n：:]{2,25})[：:]([\s\S]+)$/
          );

          if (inlineSummaryMatch) {
            const rawHeader = inlineSummaryMatch[1]
              .replace(/[:：]$/, '')
              .replace(/\*\*([^*]+)\*\*/g, '$1')
              .replace(/\*([^*]+)\*/g, '$1')
              .replace(/^[*_]+|[*_]+$/g, '')
              .trim();
            const rawBody = inlineSummaryMatch[2].trim();
            // Split rawBody by semicolons so each clause becomes an indented child bullet item with •
            const clauses = rawBody.split(/[；;]\s*/).map((c) => c.trim()).filter(Boolean);

            return (
              <div key={lineIdx} className="mt-3.5 mb-1 pt-0.5 first:mt-0 first:pt-0 space-y-1">
                <h4 className="font-extrabold text-[15.5px] text-emerald-600 dark:text-emerald-400 tracking-wide">
                  {rawHeader}
                </h4>
                <div className="space-y-1">
                  {clauses.map((clause, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-start gap-2 text-[14px] leading-relaxed pl-4 py-0.5 text-slate-700 dark:text-slate-300"
                    >
                      <span className="text-slate-400 mt-1 select-none text-xs font-mono shrink-0">
                        •
                      </span>
                      <div className="flex-1 min-w-0">{renderInlineFormatted(clause)}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        }

        // Subheading style: standalone lines like *（一）市场经济的迅速发展* or （二）统一银行券发行的需要
        // The summary subheadings stay in vibrant emerald green per user requirement!
        const isSubheading =
          /^[\\*]*[（\(][一二三四五六七八九十0-9]+[）\)][^。；\n]*[:：]?$/.test(cleanText) ||
          /^[\\*]*[一二三四五六七八九十]+[、.][^。；\n]*[:：]?$/.test(cleanText) ||
          (/^\*[^*]+\*[:：]?$/.test(cleanText) && !cleanText.includes('**')) ||
          (/^\*\*[^*]+\*\*[:：]?$/.test(cleanText) && cleanText.length <= 40) ||
          (/^\d+[\.、][^。；\n]{1,30}[:：]?$/.test(cleanText) && !cleanText.includes('。') && !cleanText.includes('；'));

        if (isSubheading && !hasColonWithBody) {
          const subTitle = cleanText
            .replace(/[:：]$/, '')
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/\*([^*]+)\*/g, '$1')
            .replace(/^[*_]+|[*_]+$/g, '')
            .trim();
          return (
            <div key={lineIdx} className="mt-4 mb-1 pt-1 first:mt-0 first:pt-0">
              <h4 className="font-extrabold text-[15.5px] text-emerald-600 dark:text-emerald-400 tracking-wide">
                {subTitle}
              </h4>
            </div>
          );
        }

        // Level 0: Introductory sentence (Clean typography, ZERO background box!)
        if (isLevel0) {
          return (
            <div
              key={lineIdx}
              className="text-[14.5px] font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-2"
            >
              {renderInlineFormatted(cleanText)}
            </div>
          );
        }

        // Level 1 & Level 2 Bullet Items (Clean typography, ZERO background box!)
        return (
          <div
            key={lineIdx}
            className={`flex items-start gap-2 text-[14px] leading-relaxed ${
              isLevel2 ? 'pl-4 py-0.5 text-slate-600 dark:text-slate-400' : 'pl-1 py-0.5 text-slate-700 dark:text-slate-300'
            }`}
          >
            <span className="text-slate-400 mt-1 select-none text-xs font-mono shrink-0">
              •
            </span>
            <div className="flex-1 min-w-0">{renderInlineFormatted(cleanText)}</div>
          </div>
        );
      })}
    </div>
  );
};
