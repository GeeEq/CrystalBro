import { Link } from "react-router-dom";
import "../pages/Body.css";
import { AlienLinkBox } from "./AlienLinkBox";
import { DragonsLinkBox } from "./DragonsLinkBox";
import { Spacer } from "./Spacer";

export function BodyPage() {
  return (
    <>
      <div className="bodyLinks">
        <Spacer />
        <AlienLinkBox />
        <DragonsLinkBox />
      </div>
    </>
  );
}
