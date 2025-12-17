import { useState } from "react";
import Header from "./components/Header";
import ModelControls from "./components/ModelControls";
import ScienceStrictnessSlider from "./components/ScienceStrictnessSlider";
import TextWorkArea from "./components/TextWorkArea";
import RiskOverview from "./components/RiskOverview";
import RewrittenSummary from "./components/RewrittenSummary";
import AnalyzeBar from "./components/AnalyzeBar";

function App() {
  // Trae mode state (UI only for now; logic later)
  const [traeEnabled, setTraeEnabled] = useState(false);
  const [scienceStrictness, setScienceStrictness] = useState(50);
  const [inputText, setInputText] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [rewrittenText, setRewrittenText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    // Clear prior errors
    setError("");

    // If there's no input, do nothing (or you could set an error)
    if (!inputText.trim()) {
      setError("Please paste some content before analyzing.");
      return;
    }

    // Set loading state
    setIsLoading(true);

    try {
      // Fake delay to simulate network call (800ms)
      await new Promise((resolve) => setTimeout(resolve, 800));

      // For now, just copy input to originalText and a dummy rewrittenText
      setOriginalText(inputText);
      setRewrittenText(
        "This is where the safer, risk-aware version of your text will appear. (Dummy text for now.)"
      );

      // Later this is where we'll set analysis results from the model.
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      {/* Outer card */}
      <div className="w-full max-w-5xl bg-brandBackground rounded-3xl shadow-xl overflow-hidden">
        {/* Header bar */}
        <Header traeEnabled={traeEnabled} onToggleTrae={setTraeEnabled} />

        {/* Main body area (blank for now) */}
        <main className="p-6 bg-brandBackground">
          <div className="grid grid-cols-2 gap-4">
            {/* Left column */}
            <div className="flex flex-col gap-4">
              <ModelControls />

              <ScienceStrictnessSlider
                value={scienceStrictness}
                onChange={setScienceStrictness}
              />
              <TextWorkArea
                inputText={inputText}
                setInputText={(value) => {
                  setInputText(value);
                  if (error) setError("");
                }}
                originalText={originalText}
                rewrittenText={rewrittenText}
              />
              <AnalyzeBar
                onAnalyze={handleAnalyze}
                isLoading={isLoading}
                isTraeEnabled={traeEnabled}
                error={error}
              />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4">
              <RiskOverview />
              <RewrittenSummary />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
