import { Route, Routes } from "react-router-dom";
import { Aliens } from "./Aliens";
import { Dragons } from "./Dragons";
import { Home } from "./Home";
import { Crystals } from "./Crystals";

export function PageRout() {
  return (
    <>
      <Routes>
        <Route path="/aliens" Component={<Aliens />} />
        <Route path="/dragons" Component={Dragons} />
        <Route path="/crystals" Component={Crystals} />
        <Route path="/" Component={Home} />
      </Routes>
    </>
  );
}
