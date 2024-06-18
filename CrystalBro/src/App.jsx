// import { useState } from "react";
// import Aliens from "./pages/Aliens";
import "./App.css";
import { Navigation } from "./pages/Navigation";
import { BodyPage } from "./pages/Body";
import { DateGen } from "./pages/DateGenerator";
import { BurgerMenu } from "./pages/BurgerMenu";

export function App() {
  return (
    <>
      <BurgerMenu />
      <div>
        <Navigation />
        <BodyPage />
      </div>
      <footer>
        <p>Copy Right @ Crystal Bro </p>
        <DateGen />
      </footer>
    </>
  );
}

export default App;
