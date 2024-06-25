import { Link } from "react-router-dom";
import "./AlienLinkBox.css";
import { Spacer } from "./Spacer";

export function AlienLinkBox() {
  return (
    <>
      <div className="alienBox">
        <div className="boxShine"></div>
        <Link to={"/aliens"} className="alienLink">
          <p>Aliens</p>
        </Link>
      </div>
    </>
  );
}
