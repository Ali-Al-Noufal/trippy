
import { memo } from 'react'
import './UpperImg.css'
const UpperImg = ({image,title}) => {
  return (
          <div className="upperimg">
      <img src={image} alt="" />
      <h1>{title}</h1>
    </div>
  )
}

export default memo(UpperImg)
