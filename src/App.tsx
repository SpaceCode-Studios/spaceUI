import {
  SpaceButton,
  SpaceCard,
  SpaceShipButtonDark,
  SpaceShipButtonLight,
} from "index";
import {
  SpaceCardContent,
  SpaceCardFooter,
  SpaceCardHeading,
  SpaceCardSubHeading,
} from "../lib/Card/SpaceCard";

function App() {
  return (
    <div>
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
        {/* Die Buttons */}
        <SpaceButton variant="SpaceOrange">Sonder glow</SpaceButton>
        <SpaceShipButtonDark>Met Glow Donker</SpaceShipButtonDark>
        <SpaceShipButtonLight>Met Glow Lig</SpaceShipButtonLight>
      </div>
      <SpaceCard hideGlow={false}>
        <SpaceCardHeading>Hierdie is die SCH</SpaceCardHeading>
        <SpaceCardSubHeading>Hiedie is die SCSH</SpaceCardSubHeading>
        <SpaceCardContent>
          Hierdie is die SCC... Maw ... Hier moet baie content wees ...
          sidebcniw ceiwj ec weki cewj cw dcihwe cx ewi ecx wiex w ei cw idec wi
        </SpaceCardContent>
        <SpaceCardFooter>Hierdie is die SCF</SpaceCardFooter>
      </SpaceCard>
    </div>
  );
}

export default App;
