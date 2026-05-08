import React, { useState } from "react";
import { Button, Input } from "@site/src/components/ui";

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
    <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-md">
      <div className="flex flex-col gap-3">
        <Input
          type="text"
          placeholder="Enter an URL..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Button onClick={handleGenerate}>Generate Obfuscated Link</Button>

        {error && <p className="text-sm text-red-500">{error}</p>}

        {encodedUrl && (
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="mb-2 text-sm text-slate-600">Your shareable link:</p>

            <div className="flex gap-2">
              <Input type="text" readOnly value={encodedUrl} />
              <Button onClick={handleCopy}>Copy</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
