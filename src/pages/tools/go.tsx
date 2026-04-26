import { useEffect } from "react";

function decodeUrl(encoded: string): string | null {
  try {
    return decodeURIComponent(atob(encoded));
  } catch {
    return null;
  }
}

export default function RedirectPage() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const decoded = decodeUrl(hash);

    if (decoded) {
      window.location.href = decoded;
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>Redirecting...</h2>
      <p>If nothing happens, the link may be invalid.</p>
    </div>
  );
}
