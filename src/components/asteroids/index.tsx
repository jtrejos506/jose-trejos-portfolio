import React, { useEffect, useRef, useState } from "react";
import { Game } from "./game";
import AsteroidsHUD from "./asteroids-hud";
import type { GameState } from "./types";
import GameOverModal from "./game-over-modal";

export default function AsteroidsGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gameRef = useRef<Game | null>(null);

  const [state, setState] = useState<GameState>({
    score: 0,
    lives: 3,
    level: 1,
    isGameOver: false,
    highScore: 0,
  });

  const [hasStarted, setHasStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handlePause = () => {
    if (!gameRef.current) return;

    gameRef.current.togglePause();
    setIsPaused((prev) => !prev);
  };

  const handleRestart = () => {
    if (!gameRef.current) return;

    gameRef.current.restart();
    setIsPaused(false);
  };

  useEffect(() => {
    if (!hasStarted) return;
    if (!canvasRef.current) return;

    const game = new Game(canvasRef.current, setState);
    gameRef.current = game;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(
          e.code,
        )
      ) {
        e.preventDefault();
      }

      if (e.code === "ArrowUp") game.setThrusting(true);
      if (e.code === "ArrowLeft") game.setRotation(0.1);
      if (e.code === "ArrowRight") game.setRotation(-0.1);
      if (e.code === "Space") game.shootLaser();

      if (e.code === "KeyP") {
        e.preventDefault();
        handlePause();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(
          e.code,
        )
      ) {
        e.preventDefault();
      }

      if (e.code === "ArrowUp") game.setThrusting(false);
      if (e.code === "ArrowLeft" || e.code === "ArrowRight")
        game.setRotation(0);
      if (e.code === "Space") game.setCanShoot(true);
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    window.addEventListener("keyup", handleKeyUp, { passive: false });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      game.destroy();
      gameRef.current = null;
    };
  }, [hasStarted]);

  return (
    <div style={{ position: "relative", width: "760px", margin: "0 auto" }}>
      <canvas
        ref={canvasRef}
        width={760}
        height={570}
        style={{
          border: "1px solid #333",
          display: "block",
          background: "black",
        }}
      />

      {hasStarted && (
        <AsteroidsHUD
          state={state}
          onPause={handlePause}
          onRestart={handleRestart}
          isPaused={isPaused}
        />
      )}

      {!hasStarted && (
        <div style={overlayStyle}>
          <div style={startCardStyle}>
            <div style={titleStyle}>Asteroids</div>
            <button onClick={handleStart} style={buttonStyle}>
              Start Game
            </button>
          </div>
        </div>
      )}

      {isPaused && <div style={overlayStyle}>⏸ Paused</div>}

      {hasStarted && state.isGameOver && (
        <GameOverModal score={state.score} onRestart={handleRestart} />
      )}
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  fontSize: "32px",
  background: "rgba(0,0,0,0.7)",
  padding: "20px 40px",
  borderRadius: "10px",
};

const startCardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  background: "rgba(0,0,0,0.82)",
  padding: "28px 36px",
  borderRadius: "12px",
  border: "1px solid #444",
};

const titleStyle: React.CSSProperties = {
  color: "white",
  fontSize: "32px",
  fontFamily: "monospace",
};

const buttonStyle: React.CSSProperties = {
  background: "#111",
  color: "white",
  border: "1px solid #666",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "16px",
};
