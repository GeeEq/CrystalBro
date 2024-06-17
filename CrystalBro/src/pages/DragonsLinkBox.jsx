import { Link } from "react-router-dom";
import "./DragonsLinkBox.css";

export function DragonsLinkBox() {
  return (
    <div className="dragonsBox">
      <div className="boxShine"></div>
      <Link to={"/dragons"} className="dragonsLink">
        <p>Dragons</p>
      </Link>
    </div>
  );
}
