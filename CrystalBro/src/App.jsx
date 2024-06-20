// import { useState } from "react";
// import Aliens from "./pages/Aliens";
import "./App.css";
import { Navigation } from "./pages/Navigation";
import { BodyPage } from "./pages/Body";
import { DateGen } from "./pages/DateGenerator";
import { BurgerMenu } from "./pages/BurgerMenu";
import { PageRout } from "./pages/RoutsPage";

export function App() {
  return (
    <div className="appAlign">
      <div className="burNav">
        <BurgerMenu />
      </div>
      <main>
        <Navigation />

        <BodyPage />
        <PageRout />
      </main>
      <footer>
        <p>Copy Right @ Crystal Bro </p>
        <DateGen />
      </footer>
    </div>
  );
}

export default App;
