import { Link } from "react-router-dom"
import "./Button.css"
import { memo } from "react"
const Button = ({text,link}) => {
  return (
    <div className="button">
      <Link to={link}>{text}</Link>
    </div>
  )
}

export default memo(Button)
