// import { Link } from "react-router-dom";
import "../pages/Body.css";
import { AlienLinkBox } from "./AlienLinkBox";
import { DragonsLinkBox } from "./DragonsLinkBox";
import { CrystalsLinkBox } from "./CrystalsLinkBox";
import { Spacer } from "./Spacer";

export function BodyPage() {
  return (
    <>
      <div className="bodyLinks">
        <div className="display">
          <Spacer />
          <AlienLinkBox />
          <div className="hideSpacer">
            <Spacer />
          </div>
        </div>

        <div className="display">
          <Spacer />
          <DragonsLinkBox />
          <div className="hideSpacer">
            <Spacer />
          </div>
        </div>

        <div className="display">
          <Spacer />
          <CrystalsLinkBox />
          <Spacer />
        </div>
      </div>
    </>
  );
}
