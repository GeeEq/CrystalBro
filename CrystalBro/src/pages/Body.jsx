import { Link } from "react-router-dom";
import "../pages/Body.css";

export function BodyPage() {
  return (
    <>
      <div className="bodyLinks">
        <div className="boxShine"></div>

        <Link to={"/aliens"} className="alienLink">
          <p>Aliens</p>
        </Link>

        <Link to={"/dragons"} className="dragonLink">
          <p>Dragons</p>
        </Link>
      </div>
    </>
  );
}
