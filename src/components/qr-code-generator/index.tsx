import { useState } from "react";
import QRCode from "qrcode";

export default function QRGenerator() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const [size, setSize] = useState(300);
  const [loading, setLoading] = useState(false);

  const generate = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    try {
      const dataUrl = await QRCode.toDataURL(url, {
        width: size,
        margin: 2,
      });
      setQr(dataUrl);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={generate}
        className="bg-white/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl"
        // className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl"
      >
        <div className="flex flex-col gap-4">
          <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-400"
            required
          />

          <select
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
          >
            {[100, 200, 300, 400, 500, 600, 700].map((s) => (
              <option key={s} value={s}>
                {s} x {s}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-medium bg-linear-to-r from-violet-600 to-indigo-600 hover:opacity-90 transition"
          >
            {loading ? "Generating..." : "Generate QR Code"}
          </button>
        </div>
      </form>

      {qr && (
        <div className="mt-6 text-center">
          <div className="p-4 bg-white rounded-xl inline-block shadow-lg">
            <img src={qr} alt="QR Code" />
          </div>

          <a
            href={qr}
            download="qrcode.png"
            className="block mt-4 text-sm text-white"
          >
            Download PNG
          </a>
        </div>
      )}
    </div>
  );
}
