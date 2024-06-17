import { Link } from "react-router-dom";
import "../pages/Body.css";

export function BodyPage() {
  return (
    <>
      <div className="bodyLinks">
        <Link to={"/aliens"} className="orangeLink">
          <p>Aliens</p>
        </Link>{" "}
        <Link to={"/dragons"} className="orangeLink">
          <p>Dragons</p>
        </Link>
      </div>
    </>
  );
}
