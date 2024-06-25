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
          <div className="alienAlign">
            <Spacer />
          </div>
          <AlienLinkBox />
          <div className="hideSpacer">
            <Spacer />
          </div>
        </div>

        <div className="display">
          <div className="dragonAlign">
            <Spacer />
          </div>

          <DragonsLinkBox />
          <div className="hideSpacer">
            <Spacer />
          </div>
        </div>

        <div className="display">
          <div className="crystalAlign">
            <Spacer />
          </div>
          <CrystalsLinkBox />
          <Spacer />
        </div>
      </div>
    </>
  );
}
