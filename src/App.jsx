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
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = async () => {
    setError("");

    if (!inputText.trim()) {
      setError("Please paste some content before analyzing.");
      return;
    }

    setIsLoading(true);

    try {
      // Fake delay to simulate work
      await new Promise((resolve) => setTimeout(resolve, 800));

      // For now, copy input to original and set a dummy rewritten version
      setOriginalText(inputText);
      setRewrittenText(
        "This is a safer, risk-aware version of your content. (Dummy text for now; will be replaced by model output.)"
      );

      // NEW: dummy analysis object to drive the right-hand panel
      setAnalysis({
        riskScore: 64,
        claimConfidence: 72, // 0–100
        issues: ["Science", "Financial", "Low evidence"],
        rewordedPhrases: ["quantum leap", "guaranteed gains"],
        summary:
          "Softened claims about immediate financial gains and added scientific uncertainty.",
        rewrittenBullets: [
          {
            label: "Financial",
            text: "Language around returns is tempered, removing implied guarantees and immediate outcomes.",
          },
          {
            label: "Science",
            text: "Statements now include uncertainty and avoid overstating the strength of evidence.",
          },
          {
            label: "Ethics",
            text: "Removed deterministic claims about societal impact and added more careful nuance.",
          },
        ],
      });
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
              <RiskOverview analysis={analysis} />
              <RewrittenSummary analysis={analysis} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
