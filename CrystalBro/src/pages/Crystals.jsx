import { useData } from "../backend/FetchData";
import { Link, useParams } from "react-router-dom";
import "./Crystals.css";
import { Spacer } from "./Spacer";
import { CrystalsLinkBox } from "./CrystalsLinkBox";

export function Crystals() {
  const crystals = useData("crystals");
  const myParams = useParams();
  const crystalsData = useData("" + myParams.crystals);
  console.log(crystalsData);
  console.log(myParams);

  console.log(crystals);
  return (
    crystals && (
      <>
        <div className="crystalsListAddBar">
          <Spacer />

          <h1 className="crystalsList">Crystals</h1>
          <Spacer />
          <p className="descriptionText ">
            Crystal, any solid material in which the component atoms are
            arranged in a definite pattern and whose surface regularity reflects
            its internal symmetry.
          </p>
          <Spacer />

          <button className="addCrystals">ADD CRYSTALS</button>
        </div>

        <div className="crystalsWrapper" key={crystals.id}>
          {crystals.map((item) => {
            return (
              <div key={item.id} className="crystalsCard">
                <div className="innerCard">
                  <h3>{item.name}</h3>
                  <img
                    src={item.imgUrl}
                    className="imgURL"
                    alt="crystal image"
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
                  <div className="btn">
                    <button className="delete">Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  );
}
