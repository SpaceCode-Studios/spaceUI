import { SpaceButton, SpaceShipButtonDark, SpaceShipButtonLight } from "index";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <SpaceButton variant="SpaceOrange">Sonder glow</SpaceButton>

      <SpaceShipButtonDark>Met Glow Donker</SpaceShipButtonDark>
      <SpaceShipButtonLight>Met Glow Lig</SpaceShipButtonLight>
    </div>
  );
}

export default App;
