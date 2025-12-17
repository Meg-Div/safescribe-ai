export default function RiskOverview() {
  return (
    <section className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      {/* Risk score row */}
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-lg bg-red-400 text-white flex items-center justify-center text-lg font-semibold">
          64
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-900">
            Risk Score
          </span>
          <span className="text-xs text-slate-500">
            Higher = more aggressive / overstated claims
          </span>
        </div>
      </div>

      {/* Claim Confidence (placeholder, real values later) */}
      <div className="mb-3">
        <span className="block text-xs font-semibold text-slate-800 mb-1">
          Claim Confidence
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 text-[11px] px-3 py-1">
          72% <span className="opacity-80">(Moderate)</span>
        </span>
      </div>

      {/* Detected Issues */}
      <div className="mb-3">
        <p className="text-xs font-semibold text-slate-800 mb-1">
          Detected Issues
        </p>
        <ul className="space-y-1 text-xs text-slate-700">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brandBlueAccent" />
            <span>Science</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brandBlueAccent" />
            <span>Financial</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brandBlueAccent" />
            <span>Low evidence</span>
          </li>
        </ul>
      </div>

      {/* Reworded phrases */}
      <div>
        <p className="text-xs font-semibold text-slate-800 mb-1">
          Reworded Phrases
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 rounded-full bg-slate-100 text-[11px] text-slate-700">
            “quantum leap”
          </span>
          <span className="px-2 py-1 rounded-full bg-slate-100 text-[11px] text-slate-700">
            “guaranteed gains”
          </span>
        </div>
      </div>
    </section>
  );
}
