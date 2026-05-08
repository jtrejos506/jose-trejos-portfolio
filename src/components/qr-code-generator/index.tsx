import { useState } from "react";
import QRCode from "qrcode";
import { Button, Input, Select } from "@site/src/components/ui";

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
    <div className="mx-auto w-full max-w-md">
      <form
        onSubmit={generate}
        className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-md"
      >
        <div className="flex flex-col gap-4">
          <Input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />

          <Select
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          >
            {[100, 200, 300, 400, 500, 600, 700].map((s) => (
              <option key={s} value={s}>
                {s} x {s}
              </option>
            ))}
          </Select>

          <Button type="submit">
            {loading ? "Generating..." : "Generate QR Code"}
          </Button>
        </div>
      </form>

      {qr && (
        <div className="mt-6 text-center">
          <div className="inline-block rounded-xl bg-white p-4 shadow-xl">
            <img src={qr} alt="QR Code" />
          </div>

          <div className="mt-6">
            <Button
              type="button"
              onClick={() => {
                const link = document.createElement("a");
                link.href = qr;
                link.download = "qrcode.png";
                link.click();
              }}
            >
              Download QR Code
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
