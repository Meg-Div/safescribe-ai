export default function ModelControls() {
  return (
    <section>
      <p className="text-xs font-semibold text-slate-800 mb-1">Model</p>
      <div className="flex gap-2">
        {/* Domain / style */}
        <select className="flex-1 border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-700 bg-white">
          <option>General</option>
          <option>Scientific</option>
          <option>Financial</option>
        </select>

        {/* Size / family */}
        <select className="flex-1 border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-700 bg-white">
          <option>Medium</option>
          <option>Small</option>
          <option>Large</option>
        </select>

        {/* Tone / strength */}
        <select className="w-24 border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-700 bg-white">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
    </section>
  );
}
