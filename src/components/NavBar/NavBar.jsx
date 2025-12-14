import { Link, NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'
import { memo, useState } from 'react'
import Button from '../Button/Button'

import { MdMenu } from 'react-icons/md'
import { IoCloseSharp } from 'react-icons/io5'

function NavBar({logo,items,btn,btn_link}) {
  const [visible,setVisible]=useState(false)
  const navigate=useNavigate()
  const shownav=()=>{
    setVisible(prev=>!prev) 
  }
const logout=()=>{
   navigate("/")
    //   axios.post("http://127.0.0.1:8000/api/logout",null,{
    //   headers:{
    //     Authorization:localStorage.getItem("token"),
    //     "Accept":"applicaton/json",
    //   }
    // }).then(res=>{
    //   console.log(res)
    //   localStorage.removeItem("token")
    //   navigate("/")
    // })
    // .catch(err=>console.log(err))
}
  return (
<nav>
<h1>{logo}</h1>
<ul className={visible?'shownav shownav_active ':"display active" }>
    {items?.map((item,index)=>{
        return(
             <NavLink key={index} to={item?.link} onClick={shownav} className={({isActive})=>isActive?'active link':'link' }><p>{item?.icon}</p><li >{item?.content}</li></NavLink> 
        )
    })}
    {btn=="logout"?<button onClick={logout}>logout</button>:<Button text={btn} link={btn_link}/>}

</ul>
    <p onClick={shownav} className={!visible?'showbtn':'display'}><MdMenu /></p>
<p onClick={shownav} className={visible?'showbtn':'display'}><IoCloseSharp /></p>
</nav>
  )
}

export default memo(NavBar)

