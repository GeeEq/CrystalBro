import { Link } from "react-router-dom";
import "./CrystalsLinkBox.css";

export function CrystalsLinkBox() {
  return (
    <>
      <div className="crystalsBox">
        <div className="boxShine"></div>
        <Link to={"/crystals"} className="crystalsLink">
          <p>Crystals</p>
        </Link>
      </div>
    </>
  );
}
