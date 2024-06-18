import { useData } from "../backend/FetchData";
import { Link } from "react-router-dom";

export function Aliens() {
  const aliens = useData("aliens");

  console.log(aliens);
  return (
    aliens && (
      <>
        <div className="aliensListAddBar">
          <p className="aliensList">Aliens List</p>
          <button className="addAlien">
            <Link to={"/aliens"} className="link">
              ADD ALIEN
            </Link>
          </button>
        </div>

        <div className="aliensWrapper">
          {aliens.map((item) => {
            return (
              <div key={item.id} className="aliensCard">
                <h3>{item.name}</h3>
                <p>{item.type}</p>
                <P>{item.description}</P>
                <p>{item.habitat}</p>
                <p>{item.imgUrl}</p>
                <div className="btn">
                  <button className="viewLog">
                    <Link to={"/aliens"} className="link">
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
