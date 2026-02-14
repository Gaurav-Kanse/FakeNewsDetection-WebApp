import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [confidence, setConfidence] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setResult("");
    setConfidence(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        { text }
      );

      setResult(response.data.prediction);
      setConfidence(response.data.confidence);
    } catch (error) {
      console.error(error);
      setResult("Error connecting to server");
    }

    setLoading(false);
  };

  const isFake = result === "Fake News";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">
        📰 Fake News Detector
      </h1>

      <textarea
        className="w-full max-w-2xl p-4 rounded-xl bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-white"
        rows="6"
        placeholder="Paste news article here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handlePredict}
        className="mt-4 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {result && (
        <div
          className={`mt-6 text-2xl font-semibold ${
            isFake ? "text-red-500" : "text-green-500"
          }`}
        >
          {result}
          {confidence !== null && (
            <span className="block text-sm text-zinc-400 mt-2">
              Confidence: {confidence}%
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
