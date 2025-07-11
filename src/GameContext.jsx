import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(null);

  const resetGame = () => {
    setScore(0);
    setMolePosition(Math.floor(Math.random() * 9));
  };

  const whackMole = () => {
    setScore((prev) => prev + 1);
    setMolePosition(Math.floor(Math.random() * 9));
  };

  return (
    <GameContext.Provider
      value={{
        score,
        molePosition,
        whackMole,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
