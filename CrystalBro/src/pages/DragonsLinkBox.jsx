import { Link } from "react-router-dom";
import "./DragonsLinkBox.css";
import { Spacer } from "./Spacer";

export function DragonsLinkBox() {
  return (
    <>
      <div className="dragonsBox">
        <div className="boxShine"></div>
        <Link to={"/dragons"} className="dragonsLink">
          <p>Dragons</p>
        </Link>
      </div>
    </>
  );
}
