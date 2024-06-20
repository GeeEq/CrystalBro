import { useData } from "../backend/FetchData";
import { Link, useParams } from "react-router-dom";
import "./Crystals.css";

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
          <p className="crystalsList">Crystals List</p>
          <button className="addcrystals">
            <Link to={"/addCrystals"} className="link">
              ADD CRYSTALS
            </Link>
          </button>
        </div>

        <div className="crystalsWrapper">
          {crystals.map((item) => {
            return (
              <div key={item.id} className="crystalsCard">
                <h3>{item.name}</h3>
                <img src={item.imgUrl} className="imgURL" />
                <p>Type: {item.type}</p>
                <p>Description: {item.description}</p>
                <p>Habitat: {item.habitat}</p>
                <div className="btn">
                  {/* <button className="viewLog">
                    <Link to={"/crystals"} className="crystalsLink">
                      View Log
                    </Link>
                  </button> */}
                  <button className="delete">
                    <Link to={"/delete"} className="orangeLink">
                      Delete
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  );
}
