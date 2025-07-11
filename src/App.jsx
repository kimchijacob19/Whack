import { useState, useEffect } from "react";
import { GameProvider, useGame } from "./GameContext";
import WelcomeScreen from "./WelcomeScreen";
import GameScreen from "./GameScreen";

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

function AppContent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { resetGame } = useGame();

  const handleStart = () => {
    resetGame();
    setIsPlaying(true);
  };

  const handleRestart = () => {
    setIsPlaying(false);
  };

  return isPlaying ? (
    <GameScreen onRestart={handleRestart} />
  ) : (
    <WelcomeScreen onStart={handleStart} />
  );
}
