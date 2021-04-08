import { NavBar } from "../components/NavBar";
import { LogoBar } from "../components/LogoBar";
import { WatDoenWijPageWindow } from "../components/WatDoenWijpageWindow";

function WatDoenWijPage() {
  return (
    <div className="Homepage">
      <LogoBar />
      <NavBar />
      <WatDoenWijPageWindow />
    </div>
  );
}

export default WatDoenWijPage;