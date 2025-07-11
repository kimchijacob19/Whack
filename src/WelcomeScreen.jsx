export default function WelcomeScreen({ onStart }) {
  return (
    <div
      className="welcome-screen"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>Welcome to Whack a Mole!</h1>
      <p>Click the mole as fast as you can. Every whack scores a point!</p>
      <button
        onClick={onStart}
        style={{ fontSize: "1.2rem", padding: "10px 20px" }}
      >
        Play
      </button>
    </div>
  );
}
