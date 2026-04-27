import React, { useEffect, useState } from "react";

interface Props {
  score: number;
  onRestart: () => void;
}

export default function GameOverModal({ score, onRestart }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ ...styles.overlay, opacity: visible ? 1 : 0 }}>
      <div style={styles.modal}>
        <h2 style={{ marginBottom: "10px" }}>Game Over</h2>
        <p style={{ marginBottom: "20px" }}>Score: {score}</p>

        <button onClick={onRestart} style={styles.button}>
          Play Again
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "opacity 0.4s ease",
  },
  modal: {
    background: "#111",
    color: "white",
    padding: "30px 40px",
    borderRadius: "12px",
    textAlign: "center",
    border: "1px solid #444",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  },
  button: {
    background: "#222",
    color: "white",
    border: "1px solid #666",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
  },
};
