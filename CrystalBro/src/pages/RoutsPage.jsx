import { Route, Routes } from "react-router-dom";
import { Aliens } from "./Aliens";
import { Dragons } from "./Dragons";
import { Home } from "./Home";

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
