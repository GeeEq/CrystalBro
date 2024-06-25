import Aliens from "./pages/Aliens";
import "./App.css";
import { Navigation } from "./pages/Navigation";
import { DateGen } from "./pages/DateGenerator";
import { BurgerMenu } from "./pages/BurgerMenu";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dragons } from "./pages/Dragons";
import { Home } from "./pages/Home";
import { Crystals } from "./pages/Crystals";
import { AddAliens } from "./pages/AddAliens";
import { AddDragons } from "./pages/AddDragons";
import { AddCrystals } from "./pages/AddCrystals";
import { Delete } from "./pages/Delete";

export function App() {
  return (
    <>
      <div className="appAlign">
        <div className="burNav">
          <BurgerMenu />
        </div>
        <main>
          <Navigation />

          <Routes>
            <Route path="/aliens" Component={Aliens} />
            <Route path="/dragons" Component={Dragons} />
            <Route path="/crystals" Component={Crystals} />
            <Route path="/addAliens" Component={AddAliens} />
            <Route path="/addDragons" Component={AddDragons} />
            <Route path="/addCrystals" Component={AddCrystals} />
            <Route path="/delete" Component={Delete} />
            <Route path="/" Component={Home} />
          </Routes>
        </main>
      </div>
      <footer>
        <p>Copy Right @ Crystal Bro </p>
        <DateGen />
      </footer>
    </>
  );
}

export default App;
