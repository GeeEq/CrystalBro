import { useData } from "../backend/FetchData";
import { Link, useParams } from "react-router-dom";
import "./Dragons.css";

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
          <h2 className="dragonsList">Dragons List</h2>
          <button className="addDragon">
            <Link to={"/addDragons"} className="link">
              ADD DRAGON
            </Link>
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
