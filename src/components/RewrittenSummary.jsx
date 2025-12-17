export default function RewrittenSummary({ analysis }) {
  const summary = analysis?.summary || "";
  const bullets = analysis?.rewrittenBullets || [];

  return (
    <section className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      {/* Key change */}
      {summary ? (
        <p className="text-xs text-slate-600 mb-3">
          <span className="font-semibold">Key change:</span> {summary}
        </p>
      ) : (
        <p className="text-xs text-slate-400 mb-3">
          Key changes to your text will appear here after analysis.
        </p>
      )}

      {/* Rewritten breakdown */}
      <p className="text-sm font-semibold text-slate-900 mb-2">
        Rewritten Text
      </p>

      {bullets.length === 0 ? (
        <p className="text-xs text-slate-400">
          Once analysis runs, you’ll see Financial, Science, and Ethics
          perspectives here.
        </p>
      ) : (
        <ul className="space-y-2 text-xs text-slate-700">
          {bullets.map((item) => (
            <li key={item.label} className="flex items-start gap-2">
              <span className="mt-[3px] h-3 w-3 rounded-full bg-emerald-500 flex-shrink-0" />
              <div>
                <p className="font-semibold">{item.label}</p>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
