export default function AnalyzeBar({
  onAnalyze,
  isLoading,
  isTraeEnabled,
  error,
}) {
  return (
    <section className="flex flex-col gap-1">
      {/* Primary action button */}
      <button
        type="button"
        onClick={onAnalyze}
        disabled={isLoading}
        className={`w-40 h-10 rounded-lg text-sm font-semibold text-white flex items-center justify-center transition-colors ${
          isLoading
            ? "bg-slate-400 cursor-not-allowed"
            : "bg-brandBlueAccent hover:bg-brandTealLight"
        }`}
      >
        {isLoading ? "Analyzing…" : "Analyze Text"}
      </button>

      {/* Mode label */}
      <p className="text-[11px] text-slate-500">
        Mode:{" "}
        <span className="font-medium text-slate-700">
          {isTraeEnabled ? "Trae Orchestration" : "Standard"}
        </span>
      </p>

      {/* Error message (if any) */}
      {error && (
        <p className="text-[11px] text-red-500">
          {error || "Something went wrong. Please try again."}
        </p>
      )}
    </section>
  );
}
