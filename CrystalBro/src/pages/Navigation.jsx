// import "./Navigation.css";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <header>
      <nav>
        <div className="logo">Crystal Bro</div>
        <div className="navLinks">
          <Link to={"/home"} className="homeLink">
            <p>Realease your Imagination</p>
          </Link>
          <Link to={"/aliens"} className="orangeLink">
            <p>Aliens</p>
          </Link>{" "}
          <Link to={"/dragons"} className="orangeLink">
            <p>Dragons</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
