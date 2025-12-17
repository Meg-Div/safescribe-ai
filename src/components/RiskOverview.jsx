export default function RiskOverview({ analysis }) {
  const riskScore =
    typeof analysis?.riskScore === "number" ? analysis.riskScore : null;
  const claimConfidence =
    typeof analysis?.claimConfidence === "number"
      ? Math.max(0, Math.min(100, Math.round(analysis.claimConfidence)))
      : null;

  const issues = analysis?.issues || [];
  const phrases = analysis?.rewordedPhrases || [];

  let confidenceLabel = null;
  let confidenceColor = "bg-slate-100 text-slate-500";

  if (claimConfidence != null) {
    if (claimConfidence >= 71) {
      confidenceLabel = "High";
      confidenceColor = "bg-emerald-50 text-emerald-700";
    } else if (claimConfidence >= 41) {
      confidenceLabel = "Moderate";
      confidenceColor = "bg-amber-50 text-amber-700";
    } else {
      confidenceLabel = "Low";
      confidenceColor = "bg-red-50 text-red-700";
    }
  }

  return (
    <section className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      {/* Risk score row */}
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-lg bg-red-400 text-white flex items-center justify-center text-lg font-semibold">
          {riskScore != null ? riskScore : "--"}
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

      {/* Claim Confidence */}
      {claimConfidence != null && (
        <div className="mb-3">
          <span className="block text-xs font-semibold text-slate-800 mb-1">
            Claim Confidence
          </span>
          <span
            className={`inline-flex items-center gap-2 rounded-full text-[11px] px-3 py-1 font-medium ${confidenceColor}`}
          >
            {claimConfidence}%{" "}
            <span className="opacity-80">({confidenceLabel})</span>
          </span>
        </div>
      )}

      {/* Detected Issues */}
      <div className="mb-3">
        <p className="text-xs font-semibold text-slate-800 mb-1">
          Detected Issues
        </p>
        {issues.length === 0 ? (
          <p className="text-[11px] text-slate-400">
            No analysis yet. Run an analysis to see flagged issues.
          </p>
        ) : (
          <ul className="space-y-1 text-xs text-slate-700">
            {issues.map((issue) => (
              <li key={issue} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brandBlueAccent" />
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Reworded phrases */}
      <div>
        <p className="text-xs font-semibold text-slate-800 mb-1">
          Reworded Phrases
        </p>
        {phrases.length === 0 ? (
          <p className="text-[11px] text-slate-400">
            Key phrases to rewrite will appear here.
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {phrases.map((p, idx) => (
              <span
                key={`${p}-${idx}`}
                className="px-2 py-1 rounded-full bg-slate-100 text-[11px] text-slate-700"
              >
                {p}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
