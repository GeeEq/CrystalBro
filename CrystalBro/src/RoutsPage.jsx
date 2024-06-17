import { Route, Routes } from "react-router-dom";
import { Aliens } from "./pages/Aliens";
import { Dragons } from "./pages/Dragons";
import { Home } from "./pages/Home";

export function PageRout() {
  return (
    <>
      <Routes>
        <Route path="/aliens" Component={Aliens} />
        <Route path="/dragons" Component={Dragons} />
        <Route path="/home" Component={Home} />
      </Routes>
    </>
  );
}
