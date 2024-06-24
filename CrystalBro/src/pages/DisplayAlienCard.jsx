import { useData } from "../backend/FetchData";
import { useParams } from "react-router-dom";

export function DisplayAlienCard() {
  const aliens = useData("aliens");

  const myParams = useParams();
  const alienData = useData("" + myParams.aliens);
  console.log(alienData);
  console.log(myParams);
  console.log(aliens);

  // const { id } = useParams();

  function deleteAlien() {
    console.log("deleting...");
  }

  {
    <>
    aliens.map((item) => {
      return (
        <>
          <div key={item.id} className="aliensCard">
            <div className="innerCard">
              <h3>{item.name}</h3>
              <img src={item.imgUrl} className="imgURL" alt="alien image" />
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
                <button className="delete" onClick={deleteAlien} key={item.id}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });
    </>
  }
}
