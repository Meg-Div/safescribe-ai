import featherImg from "../assets/feather.png";
import TraeToggle from "./TraeToggle";

export default function Header({ traeEnabled, onToggleTrae }) {
  return (
    <header className="w-full bg-brandTeal text-white px-6 py-4 flex items-center justify-between">
      {/* Left: Feather + Title */}
      <div className="flex items-center gap-3">
        {/* Feather in circle */}
        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
          <img
            src={featherImg}
            alt="SafeScribe logo"
            className="h-6 w-6 object-contain"
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col leading-tight">
          <span className="text-xl font-semibold">SafeScribe AI</span>
          <span className="text-sm opacity-90">
            Multi-Agent, Risk-Aware Text Rewriting
          </span>
        </div>
      </div>

      {/* Right: Trae toggle */}
      <div className="flex items-center gap-3">
        <span className="text-lg font-medium">Trae</span>
        <TraeToggle enabled={traeEnabled} onChange={onToggleTrae} />
      </div>
    </header>
  );
}
