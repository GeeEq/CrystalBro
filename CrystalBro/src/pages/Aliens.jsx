// import { useData } from "../backend/FetchData";
import { useParams } from "react-router-dom";
import "./Aliens.css";
import { Spacer } from "./Spacer";
import { useEffect, useState } from "react";
import axios from "axios"
import { Routes, Route } from "react-router-dom";
import { AddAliens } from "./AddAliens";

export default function Aliens() {
  const [aliens, setAliens] = useState([]);
  const myParams = useParams();

  useEffect(() => {
    axios
      .get("/aliens")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAliens(response.data); 
        } else {
          console.error("API did not return an array:", response.data);
          setAliens([]); 
        }
      })
      .catch((error) => console.error("Error fetching aliens:", error));
  }, []);
  

const deleteAlien = async (id) => {
  try {
    await axios.delete(`/aliens/${id}`);
    const updatedAliens = aliens.filter((alien) => alien._id !== id);
    setAliens(updatedAliens);
  } catch (error) {
    console.error("Error deleting alien:", error);
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
          {Array.isArray(aliens) && aliens.map((item) => {
            return (
              <>
                <div key={item._id} className="aliensCard">
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
          <Route path="/addAliens" element={AddAliens} />
        </Routes>
      </>
    )
  );
}
