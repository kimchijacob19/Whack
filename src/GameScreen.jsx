import { useGame } from "./GameContext";

export default function GameScreen({ onRestart }) {
  const { score, molePosition, whackMole } = useGame();

  const holes = Array.from({ length: 9 });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Score: {score}</h2>
      <button onClick={onRestart}>Restart</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 150px)",
          gridGap: "10px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {holes.map((_, index) => (
          <div
            key={index}
            className="hole"
            style={{
              width: "150px",
              height: "150px",
              position: "relative",
            }}
          >
            {molePosition === index && (
              <div
                className="mole"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  cursor: "pointer",
                }}
                onClick={whackMole}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
