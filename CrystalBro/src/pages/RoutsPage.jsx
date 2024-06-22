import { Route, Routes } from "react-router-dom";
import { Aliens } from "./Aliens";
import { Dragons } from "./Dragons";
import { Home } from "./Home";
import { Crystals } from "./Crystals";
import { AddAliens } from "./AddAliens";
import { AddDragons } from "./AddDragons";
import { AddCrystals } from "./AddCrystals";
import { Delete } from "./Delete";
export function PageRout() {
  return (
    <>
      <Routes>
        <Route exact path="/aliens" Component={Aliens} />
        <Route path="/dragons" Component={Dragons} />
        <Route path="/crystals" Component={Crystals} />
        <Route path="/addAliens" Component={AddAliens} />
        <Route path="/addDragons" Component={AddDragons} />
        <Route path="/addCrystals" Component={AddCrystals} />
        <Route path="/delete" Component={Delete} />
        <Route path="/" Component={Home} />
      </Routes>
    </>
  );
}
