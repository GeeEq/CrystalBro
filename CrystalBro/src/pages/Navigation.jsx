import { Link } from "react-router-dom";
import "../pages/Navigation.css";

export function Navigation() {
  return (
    <header>
      <div className="logo">
        <div className="logo">
          <Link to={"/"} className="homeLink"></Link>
        </div>
      </div>
      <p className="navText">Realease Your Imagination</p>
    </header>
  );
}
