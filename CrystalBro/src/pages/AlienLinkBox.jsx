import { Link } from "react-router-dom";

export function AlienLinkBox() {
  return (
    <div>
      <div className="boxShine"></div>
      <Link to={"/aliens"} className="alienLink">
        <p>Aliens</p>
      </Link>
    </div>
  );
}
