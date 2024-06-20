import { useData } from "../backend/FetchData";
import { Link, useParams } from "react-router-dom";
import "./Aliens.css";

export function Aliens() {
  const aliens = useData("aliens");
  const myParams = useParams();
  const alienData = useData("" + myParams.aliens);
  console.log(alienData);
  console.log(myParams);

  console.log(aliens);
  return (
    aliens && (
      <>
        <div className="aliensListAddBar">
          <h2 className="aliensList">Aliens List</h2>
          <button className="addAlien">
            <Link to={"/addAliens"} className="link">
              ADD ALIEN
            </Link>
          </button>
        </div>

        <div className="aliensWrapper">
          {aliens.map((item) => {
            return (
              <div key={item.id} className="aliensCard">
                <h3>{item.name}</h3>
                <p>Type: {item.type}</p>
                <p>Description: {item.description}</p>
                <p>Habitat: {item.habitat}</p>
                <p>{item.imgUrl}</p>
                <div className="btn">
                  {/* <button className="edit">
                    <Link to={"/edit"} className="link">
                      Edit
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
