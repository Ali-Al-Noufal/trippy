import { memo } from "react"
import "./UpperText.css"

function UpperText({title,suptitle}) {
  return (
    <div className="uppertext">
      <h1>{title}</h1>
      <p>{suptitle}</p>
    </div>
  )
}

export default memo(UpperText)
