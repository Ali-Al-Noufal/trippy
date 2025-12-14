import { memo } from "react";
import "./Container.css"

function Container({title,description,img1,img2,reverse}) {
    let classdir=reverse?"container reverse":"container";
  return (
    <div className={classdir}>
      <div className="containertext">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="containerimg">
        <img src={img1} alt="" className="firstimg" />
        <img src={img2} alt="" />
      </div>
    </div>
  )
}

export default memo(Container)
