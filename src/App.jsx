import { useState } from "react";
import Header from "./components/Header";

function App() {
  // Trae mode state (UI only for now; logic later)
  const [traeEnabled, setTraeEnabled] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      {/* Outer card */}
      <div className="w-full max-w-5xl bg-brandBackground rounded-3xl shadow-xl overflow-hidden">
        {/* Header bar */}
        <Header traeEnabled={traeEnabled} onToggleTrae={setTraeEnabled} />

        {/* Main body area (blank for now) */}
        <main className="p-6 bg-brandBackground">
          <div className="border border-dashed border-slate-300 rounded-xl p-6 text-slate-500 text-sm text-center">
            Main SafeScribe UI layout will go here in the next hours.
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
