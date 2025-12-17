export default function RewrittenSummary() {
  return (
    <section className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <p className="text-xs text-slate-600 mb-3">
        <span className="font-semibold">Key change:</span> Softened claims about
        immediate financial gains and added scientific uncertainty.
      </p>

      <p className="text-sm font-semibold text-slate-900 mb-2">
        Rewritten Text
      </p>

      <ul className="space-y-2 text-xs text-slate-700">
        <li className="flex items-start gap-2">
          <span className="mt-[3px] h-3 w-3 rounded-full bg-emerald-500 flex-shrink-0" />
          <div>
            <p className="font-semibold">Financial</p>
            <p>
              Language around returns is tempered, removing implied guarantees
              and immediate outcomes.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <span className="mt-[3px] h-3 w-3 rounded-full bg-emerald-500 flex-shrink-0" />
          <div>
            <p className="font-semibold">Science</p>
            <p>
              Statements now include uncertainty and avoid overstating the
              strength of evidence.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-2">
          <span className="mt-[3px] h-3 w-3 rounded-full bg-emerald-500 flex-shrink-0" />
          <div>
            <p className="font-semibold">Ethics</p>
            <p>
              Removed deterministic claims about societal impact and added more
              careful nuance.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
