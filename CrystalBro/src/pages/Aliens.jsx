import { useData } from "../backend/FetchData";
import { useParams } from "react-router-dom";
import "./Aliens.css";
import { Spacer } from "./Spacer";
import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import { AddAliens } from "./AddAliens";

export default function Aliens() {
  const aliens = useData("aliens");

  const myParams = useParams();
  const alienData = useData("" + myParams.aliens);
  console.log(alienData);
  console.log(myParams);
  console.log(aliens);

  const [alien, setAlien] = useState();

  const deleteAlien = async (id) => {
    try {
      await fetch(`http://localhost:5038/CrystalBro/${id}`, {
        method: "DELETE",
      });
      const updatedUsers = aliens.filter((alien) => alien.id !== id);
      setAlien(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    aliens && (
      <>
        <div className="aliensListAddBar">
          <Spacer />

          <h1 className="aliensList">Aliens</h1>
          <Spacer />
          <p className="descriptionText">
            An alien is an extraterrestrial being from another world, typically
            described as having a physical appearance, abilities, and behavior
            that is very different from that of a human. Aliens often play a
            role in science fiction stories and can be viewed as either
            beneficial or hostile to humans.
          </p>
          <Spacer />

          <button className="addAlien" onClick={() => setIsOpen(true)}>
            ADD ALIEN
          </button>
          <AddAliens open={isOpen} onClose={() => setIsOpen(false)} />
        </div>

        <div className="aliensWrapper" key={aliens.id}>
          {aliens.map((item) => {
            return (
              <>
                <div key={item.id} className="aliensCard">
                  <div className="innerCard">
                    <h3>{item.name}</h3>
                    <img
                      src={item.imgUrl}
                      className="imgURL"
                      id="imgId"
                      alt="alien image"
                    />
                    <p>
                      <span>Type: </span>
                      {item.type}
                    </p>
                    <p>
                      <span>Description: </span>
                      {item.description}
                    </p>
                    <p>
                      <span>Habitat: </span>
                      {item.habitat}
                    </p>
                    <div className="btn" key={item.id}>
                      <button
                        className="delete"
                        onClick={() => deleteAlien(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Routes>
          <Route path="/addAliens" Component={AddAliens} />
        </Routes>
      </>
    )
  );
}
