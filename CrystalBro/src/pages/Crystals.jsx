import { useData } from "../backend/FetchData";
import { Link } from "react-router-dom";

export default function Crystals() {
  const crystals = useData("crystals");

  console.log(crystals);
  return (
    crystals && (
      <>
        <div className="crystalsListAddBar">
          <p className="crystalsList">Crystals List</p>
          <button className="addcrystals">
            <Link to={"/crystals"} className="link">
              ADD Crystals
            </Link>
          </button>
        </div>

        <div className="crystalsWrapper">
          {crystals.map((item) => {
            return (
              <div key={item.id} className="crystalsCard">
                <h3>{item.name}</h3>
                <p>{item.type}</p>
                <P>{item.description}</P>
                <p>{item.habitat}</p>
                <p>{item.imgUrl}</p>
                <div className="btn">
                  <button className="viewLog">
                    <Link to={"/crystals"} className="crystalsLink">
                      View Log
                    </Link>
                  </button>
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
