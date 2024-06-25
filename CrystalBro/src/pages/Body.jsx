import "../pages/Body.css";
import { AlienLinkBox } from "./AlienLinkBox";
import { DragonsLinkBox } from "./DragonsLinkBox";
import { CrystalsLinkBox } from "./CrystalsLinkBox";
import { Spacer } from "./Spacer";

export function BodyPage() {
  return (
    <>
      <section className="bodyDescText">
        <h2>Imagination</h2>
        <p className="textDescr">
          Imagination is the production of sensations, feelings and thoughts
          informing oneself.These experiences can be re-creations of past
          experiences, such as vivid memories with imagined changes, or
          completely invented and possibly fantastic scenes. Imagination helps
          apply knowledge to solve problems and is fundamental to integrating
          experience and the learning process. a way of building theory, it is
          called "disciplined imagination".
        </p>
      </section>
      <div className="bodyLinks">
        <div className="display">
          <div className="alienAlign">
            <Spacer />
          </div>
          <AlienLinkBox />
          <div className="hideSpacer">
            <Spacer />
          </div>
        </div>

        <div className="display">
          <div className="dragonAlign">
            <Spacer />
          </div>

          <DragonsLinkBox />
          <div className="hideSpacer">
            <Spacer />
          </div>
        </div>

        <div className="display">
          <div className="crystalAlign">
            <Spacer />
          </div>
          <CrystalsLinkBox />
          <Spacer />
        </div>
      </div>
    </>
  );
}
