// import "./Navigation.css";
import { Link } from "react-router-dom";
import "../pages/Navigation.css";

export function Navigation() {
  return (
    <header>
      <nav>
        <div className="logo">
          {/* <Link to={"/home"} className="homeLink"></Link> */}
        </div>
        <p className="navText">Realease Your Imagination</p>
        {/* <div className="navLinks">
          <Link to={"/aliens"} className="orangeLink">
            <p>Aliens</p>
          </Link>{" "}
          <Link to={"/dragons"} className="orangeLink">
            <p>Dragons</p>
          </Link>
        </div> */}
      </nav>
    </header>
  );
}
