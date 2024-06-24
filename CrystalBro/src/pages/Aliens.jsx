import { useData } from "../backend/FetchData";
import { useParams } from "react-router-dom";
import "./Aliens.css";
import { Spacer } from "./Spacer";
import { useEffect, useState } from "react";
// import { AlienLinkBox } from "./AlienLinkBox";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Aliens() {
  const aliens = useData("aliens");

  const myParams = useParams();
  const alienData = useData("" + myParams.aliens);
  console.log(alienData);
  console.log(myParams);
  console.log(aliens);

  // const { id } = useParams();
  // const [alien, setAlien] = useState();
  // const [notFound, setNotFound] = useState();
  // useEffect(() => {
  //   const url = useData + "/aliens" + id;
  //   fetch(url)
  //     .then((response) => {
  //       if (response.status === 404) {
  //         setNotFound(true);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setAlien(data.alien);
  //     });
  // }, []);

  function deleteAlien() {
    console.log("deleting...");
  }
  return (
    aliens && (
      <>
        <div className="aliensListAddBar">
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

          <button className="addAlien">ADD ALIEN</button>
        </div>

        <div className="aliensWrapper" key={aliens.id}>
          {/* <div className="sliderWrapper"> */}
          {aliens.map((item) => {
            return (
              <>
                <span className="slider" id="{item.id} sliderId"></span>

                <div key={item.id} className="aliensCard" id={item.id}>
                  <div className="innerCard">
                    <h3>{item.name}</h3>
                    <img
                      src={item.imgUrl}
                      className="imgURL"
                      id="imgId"
                      alt="alien image"
                    />
                    {/* <a
                      href="#{item.id}  sliderId"
                      className="button"
                      id="{item.id }"
                    ></a> */}
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
                        onClick={deleteAlien}
                        key={item.id}
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
        {/* </div> */}
      </>
    )
  );
}
