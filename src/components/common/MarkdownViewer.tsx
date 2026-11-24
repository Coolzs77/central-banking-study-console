import React, { useState } from 'react';

interface MarkdownViewerProps {
  content: string;
  maskKeywords?: boolean;
  onToggleClozeAll?: boolean;
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({
  content,
  maskKeywords = false,
  onToggleClozeAll = false
}) => {
  const [revealedSet, setRevealedSet] = useState<Set<number>>(new Set());

  // Reset or reveal all when maskKeywords or onToggleClozeAll changes
  React.useEffect(() => {
    if (!maskKeywords) {
      setRevealedSet(new Set());
    }
  }, [maskKeywords]);

  let globalClozeIdx = 0;

  const toggleCloze = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setRevealedSet(prev => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const renderInlineFormatted = (text: string) => {
    // Strip ==N== tags if present
    let mainText = text.replace(/\t*==\d+==/g, '');

    // Split by **bold** or *italic*
    // First, split by **...**
    const boldTokens = mainText.split(/(\*\*[^*]+\*\*)/g);

    return (
      <span className="leading-relaxed">
        {boldTokens.map((segment, i) => {
          if (segment.startsWith('**') && segment.endsWith('**') && segment.length >= 4) {
            const rawWord = segment.slice(2, -2);
            const clozeId = globalClozeIdx++;
            const isRevealed = !maskKeywords || onToggleClozeAll || revealedSet.has(clozeId);

            if (!isRevealed) {
              return (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => toggleCloze(clozeId, e)}
                  title="点击揭开关键词"
                  className="inline-flex items-center px-2 py-0.5 mx-1 my-0.5 rounded bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs font-medium border border-blue-300 transition-all cursor-pointer shadow-sm active:scale-95 select-none"
                >
                  <span className="opacity-60 mr-1">[</span>
                  <span className="font-bold tracking-widest text-[11px]">··· 揭开</span>
                  <span className="opacity-60 ml-1">]</span>
                </button>
              );
            }

            return (
              <strong
                key={i}
                onClick={(e) => maskKeywords && toggleCloze(clozeId, e)}
                className={`font-bold px-1 py-0.5 rounded transition-colors ${
                  maskKeywords
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 cursor-pointer hover:bg-emerald-200'
                    : 'bg-blue-50 text-blue-900 border-b-2 border-blue-400'
                }`}
                title={maskKeywords ? '点击重新遮挡' : undefined}
              >
                {rawWord}
              </strong>
            );
          }

          // Check if segment has *italic* markers
          const italicTokens = segment.split(/(\*[^*]+\*)/g);
          return (
            <React.Fragment key={i}>
              {italicTokens.map((part, j) => {
                if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
                  const rawItalic = part.slice(1, -1);
                  return (
                    <span key={j} className="font-semibold text-slate-800">
                      {rawItalic}
                    </span>
                  );
                }
                return <span key={j}>{part}</span>;
              })}
            </React.Fragment>
          );
        })}
      </span>
    );
  };

  const lines = content.split('\n');

  return (
    <div className="space-y-3 text-slate-700">
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

        // Subheading style if line looks like *（一）...*
        const isSubheading = /^[\\*]*[（\(][一二三四五六七八九十0-9]+[）\)][\\*]*/.test(cleanText) ||
                             (/^\*[^*]+\*$/.test(cleanText) && !cleanText.includes('**'));

        if (isSubheading) {
          const subTitle = cleanText.replace(/^\*+|\*+$/g, '');
          return (
            <div key={lineIdx} className="mt-3 mb-1 pt-2 flex items-center gap-2 border-t border-slate-100 first:border-t-0 first:pt-0">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
              <h4 className="font-bold text-slate-800 text-[15px]">
                {subTitle}
              </h4>
            </div>
          );
        }

        if (isLevel0) {
          return (
            <div key={lineIdx} className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80 text-[14.5px] font-medium text-slate-800 shadow-sm">
              {renderInlineFormatted(cleanText)}
            </div>
          );
        }

        return (
          <div
            key={lineIdx}
            className={`flex items-start gap-2 text-[14px] leading-relaxed ${
              isLevel2 ? 'pl-4 py-1 text-slate-700' : 'pl-2 py-0.5'
            }`}
          >
            <span className="text-blue-400 mt-1 select-none text-xs font-mono shrink-0">•</span>
            <div className="flex-1">{renderInlineFormatted(cleanText)}</div>
          </div>
        );
      })}
    </div>
  );
};
