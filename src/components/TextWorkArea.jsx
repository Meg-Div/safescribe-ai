export default function TextWorkArea({
  inputText,
  setInputText,
  originalText,
  rewrittenText,
}) {
  return (
    <section className="bg-white rounded-xl border border-slate-200 p-3 flex flex-col gap-3">
      {/* Main input */}
      <div>
        <p className="text-xs font-semibold text-slate-800 mb-1">
          Paste Content to Audit
        </p>
        <textarea
          className="w-full min-h-[110px] rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 bg-white resize-vertical"
          placeholder="Paste or type content here…"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      {/* Original + Rewritten draft row */}
      <div className="grid grid-cols-2 gap-3">
        {/* Original Text */}
        <div>
          <p className="text-xs font-semibold text-slate-800 mb-1">
            Original Text
          </p>
          <div className="min-h-[80px] rounded-lg border border-slate-200 bg-brandBackground px-3 py-2 text-xs text-slate-600">
            {originalText || "Will be filled with the analyzed content."}
          </div>
        </div>

        {/* Rewritten Text (draft view) */}
        <div>
          <p className="text-xs font-semibold text-slate-800 mb-1">
            Rewritten Text
          </p>
          <div className="min-h-[80px] rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">
            {rewrittenText || "Safe, toned-down draft will appear here."}
          </div>
        </div>
      </div>
    </section>
  );
}
