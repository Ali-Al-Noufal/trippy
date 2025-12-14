
import { memo } from 'react'
import Button from '../Button/Button'
import './Hero.css'
function Hero({image,title,suptitle,btn,link}) {
  return (
    <div className="hero">
      <img src={image} alt="" />
    <div className='herotext'>
      <h1>{title}</h1>
      <p>{suptitle}</p>
      {
        btn?<Button text={btn} link={link} />:""
      }
    </div>
    </div>
  )
}

export default memo(Hero)
