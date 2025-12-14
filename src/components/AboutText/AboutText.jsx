import { memo } from "react"
import "./AboutText.css"

const AboutText = ({title,description}) => {
  return (
    <div className="aboutText">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default memo(AboutText)
