// import "./Navigation.css";
import { Link } from "react-router-dom";
import "../pages/Navigation.css";
// import { BurgerMenu } from "./BurgerMenu";

export function Navigation() {
  return (
    <header>
      <div className="logo">
        <div className="logo">
          <Link to={"/"} className="homeLink"></Link>
        </div>
        <p className="navText">Realease Your Imagination</p>
      </div>
    </header>
  );
}
