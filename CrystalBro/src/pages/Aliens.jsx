import { useData } from "../backend/FetchData";
import { Link, useParams } from "react-router-dom";
import "./Aliens.css";
import { Spacer } from "./Spacer";

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
          <div className="listAddWrapper">
            <h1 className="aliensList">Aliens</h1>
          </div>
          <Spacer />
          <p className="descriptionText">
            An alien is an extraterrestrial being from another world, typically
            described as having a physical appearance, abilities, and behavior
            that is very different from that of a human. Aliens often play a
            role in science fiction stories and can be viewed as either
            beneficial or hostile to humans.
          </p>
          <Spacer className="spacer" />

          <button className="addAlien">
            {/* <Link to={"/addAliens"} className="link"> */}
            ADD ALIEN
            {/* </Link> */}
          </button>
        </div>

        <div className="aliensWrapper">
          {aliens.map((item) => {
            return (
              <div key={item.id} className="aliensCard">
                <h3>{item.name}</h3>
                <img src={item.imgUrl} className="imgURL" />

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
            );
          })}
        </div>
      </>
    )
  );
}
