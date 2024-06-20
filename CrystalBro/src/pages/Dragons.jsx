import { useData } from "../backend/FetchData";
import { Link, useParams } from "react-router-dom";
import "./Dragons.css";
import { Spacer } from "./Spacer";

export function Dragons() {
  const dragons = useData("dragons");

  const myParams = useParams();
  const dragonsData = useData("" + myParams.dragons);
  console.log(dragonsData);
  console.log(myParams);

  console.log(dragons);
  return (
    dragons && (
      <>
        <div className="dragonsListAddBar">
          <h1 className="dragonsList">Dragons</h1>
          <Spacer />

          <p className="descriptionText">
            A dragon is a fire-breathing mythological animal, a winged, flying,
            scaly creature. In many European legends, brave knights battle evil
            dragons. The dragon shows up in the mythologies of many different
            cultures, usually breathing fire and resembling a giant reptile or
            serpent with wings.
          </p>
          <Spacer />

          <button className="addDragon">
            {/* <Link to={"/addDragons"} className="link"> */}
            ADD DRAGON
            {/* </Link> */}
          </button>
        </div>

        <div className="dragonsWrapper">
          {dragons.map((item) => {
            return (
              <div key={item.id} className="dragonsCard">
                <h3>{item.name}</h3>
                <img src={item.imgUrl} className="imgURL" />
                <p>Type: {item.type}</p>
                <p>Description: {item.description}</p>
                <p>Habitat: {item.habitat}</p>
                <div className="btn">
                  <button className="delete">
                    {/* <Link to={"/delete"} className="orangeLink"> */}
                    Delete
                    {/* </Link> */}
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
