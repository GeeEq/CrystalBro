import { useState } from "react";
// import Aliens from "./pages/Aliens";
import "./App.css";
import { Navigation } from "./pages/Navigation";
import { BodyPage } from "./pages/Body";
import { DateGen } from "./pages/DateGenerator";

export function App() {
  return (
    <>
      <div>
        <Navigation />
        <BodyPage />
      </div>
      {/* <Aliens></Aliens> */}
      <footer>
        <p>
          @ Copy Right Crystal Bro <DateGen />
        </p>
      </footer>
    </>
  );
}

export default App;
