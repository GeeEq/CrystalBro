import { useState } from "react";
// import Aliens from "./pages/Aliens";
import "./App.css";
import { Navigation } from "./pages/Navigation";
import { BodyPage } from "./pages/Body";

export function App() {
  return (
    <>
      <div>
        <Navigation />
        <BodyPage />
      </div>
      {/* <Aliens></Aliens> */}
    </>
  );
}

export default App;
