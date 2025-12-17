export default function ScienceStrictnessSlider({ value, onChange }) {
  return (
    <section>
      <p className="text-xs font-semibold text-slate-800 mb-1">
        Science Strictness
      </p>
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-slate-500">Low</span>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 accent-brandBlueAccent"
        />
        <span className="text-[11px] text-slate-500">High</span>
      </div>
    </section>
  );
}
