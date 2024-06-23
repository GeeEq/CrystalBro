import { AlienCarousel } from "./AlienCarousel";
import { Spacer } from "./Spacer";

export function DisplayAlienCarousel() {
  return (
    <>
      <div className="aliensListAddBar">
        <h1 className="aliensList">Aliens</h1>
        <Spacer />
        <p className="descriptionText">
          An alien is an extraterrestrial being from another world, typically
          described as having a physical appearance, abilities, and behavior
          that is very different from that of a human. Aliens often play a role
          in science fiction stories and can be viewed as either beneficial or
          hostile to humans.
        </p>
        <Spacer />

        <button className="addAlien">ADD ALIEN</button>
      </div>
      <AlienCarousel />
    </>
  );
}
