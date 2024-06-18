import "./BurgerMenu.css";
import { useState } from "react";
// import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import { PageRout } from "./RoutsPage";

export function BurgerMenu() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
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
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <ul>
          <li className="pageLink">
            <Link to="/">Home</Link>
          </li>
          <li className="pageLink">
            <Link to="/aliens">Aliens</Link>
          </li>
          <li className="pageLink">
            <Link to="/dragons">Dragons</Link>
          </li>
          <li className="pageLink">
            <Link to="/crystals">Crystals</Link>
          </li>
        </ul>
      </nav>
      <div className={menu_class}></div>
    </div>
  );
}
