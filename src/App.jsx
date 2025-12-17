import featherImg from "./assets/feather.png";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-4xl bg-brandBackground rounded-3xl shadow-xl flex flex-col items-center justify-center py-10">
        <img
          src={featherImg}
          alt="SafeScribe logo"
          className="h-16 mb-4 object-contain"
        />
        <h1 className="text-2xl font-semibold text-slate-800 mb-2">
          SafeScribe AI
        </h1>
        <p className="text-slate-600">
          Initial setup complete. UI build starts next.
        </p>
      </div>
    </div>
  );
}

export default App;
