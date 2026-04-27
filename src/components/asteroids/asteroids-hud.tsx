import React from "react";
import type { GameState } from "./types";

interface Props {
  state: GameState;
  onPause: () => void;
  onRestart: () => void;
  isPaused: boolean;
}

export default function AsteroidsHUD({
  state,
  onPause,
  onRestart,
  isPaused,
}: Props) {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <div>Lives: {state.lives}</div>
        <div>Score: {state.score}</div>
        <div>Best: {state.highScore}</div>
      </div>

      <div style={styles.center}>
        <div>Level {state.level}</div>
      </div>

      <div style={styles.right}>
        <button onClick={onPause} style={styles.button}>
          {isPaused ? "▶ Resume" : "⏸ Pause"}
        </button>

        <button onClick={onRestart} style={styles.button}>
          Restart
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    padding: "10px 20px",
    color: "white",
    fontFamily: "monospace",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    display: "flex",
    gap: "15px",
  },
  center: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  right: {
    display: "flex",
    gap: "10px",
  },
  button: {
    background: "#111",
    color: "white",
    border: "1px solid #555",
    padding: "5px 10px",
    cursor: "pointer",
  },
};
