import "./BurgerMenu.css";
import { useState } from "react";
// import { Navigation } from "./Navigation";
import { Link, NavLink } from "react-router-dom";
// import { PageRout } from "./RoutsPage";

export function BurgerMenu() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <div style={{ width: "100%", height: "100hv" }}>
      <nav>
        <div
          className="burger-menu"
          onClick={() => {
            updateMenu();
            setMenuOpen(!menuOpen);
            // setMenuOpen(menuOpen);
          }}
        >
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>

        <div className="deskLogo"></div>

        <ul className={menuOpen ? "open" : ""}>
          <li className="pageLink">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="pageLink">
            <NavLink to="/aliens">Aliens</NavLink>
          </li>
          <li className="pageLink">
            <NavLink to="/dragons">Dragons</NavLink>
          </li>
          <li className="pageLink">
            <NavLink to="/crystals">Crystals</NavLink>
          </li>
        </ul>
      </nav>
      <div className={menu_class}></div>
    </div>
  );
}
