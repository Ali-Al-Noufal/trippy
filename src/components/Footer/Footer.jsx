import { memo } from "react"
import "./Footer.css"

function Footer({title,description,icons,lists}) {
    
  return (
    <div className="footer">
      <div className="top">
       <div>
        <h3>{title}</h3>
        <p>{description}</p>
       </div>
       <ul>
        {icons?.map((icon,index)=>{
            return(
                <li key={index}>{icon}</li>
            )
        })}
       </ul>
      </div>
      <div className="bottom">
      {lists?.map((list,index)=>{
        return(        <div key={index}>
            <h3>{list.title}</h3>
            <ul>
            {list.arr?.map((item,index)=>{
                return(
                    <li key={index}>{item}</li>
                )
            })}
            </ul>
        </div>)
      })}
      </div>
    </div>
  )
}

export default memo(Footer)
