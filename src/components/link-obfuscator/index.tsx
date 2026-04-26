import React, { useState } from "react";

function encodeUrl(url: string): string {
  try {
    return btoa(encodeURIComponent(url));
  } catch {
    return "";
  }
}

function decodeUrl(encoded: string): string | null {
  try {
    return decodeURIComponent(atob(encoded));
  } catch {
    return null;
  }
}

export default function LinkObfuscator() {
  const [input, setInput] = useState("");
  const [encodedUrl, setEncodedUrl] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = () => {
    setError("");

    if (!input) {
      setError("Please enter a URL.");
      return;
    }

    try {
      new URL(input);
    } catch {
      setError("Invalid URL format.");
      return;
    }

    const encoded = encodeUrl(input);
    const generated = `${window.location.origin}/tools/go#${encoded}`;
    setEncodedUrl(generated);
  };

  const handleCopy = async () => {
    if (!encodedUrl) return;
    await navigator.clipboard.writeText(encodedUrl);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 rounded-2xl shadow-md border border-slate-200">
      <h2 className="text-xl font-semibold mb-4 ">Link Obfuscator</h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter an URL..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />

        <button
          onClick={handleGenerate}
          className="bg-linear-to-r from-violet-600 to-indigo-600 text-white py-2 rounded-xl hover:opacity-90 transition"
        >
          Generate Obfuscated Link
        </button>

        {error && <p className="text-sm text-red-500">{error}</p>}

        {encodedUrl && (
          <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Your shareable link:</p>

            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={encodedUrl}
                className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
              <button
                onClick={handleCopy}
                className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white hover:bg-slate-700"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
