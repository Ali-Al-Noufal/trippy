import { useState } from "react"
import Button from "../Button/Button"
import "./Show.css"


const Show = ({flight,bookings,access,reload,messages}) => {
       
        const [variable,setVariable]=useState(-1)
    const [status,setStatus]=useState("")
    const handle=(event,id)=>{
        event.preventDefault()
    //       axios.post(`http://127.0.0.1:8000/api/bookings/${id}`,{status,"_method":"put"},{                    
    // headers:{
    //       Authorization:localStorage.getItem("token"),
    //       "Accept":"applicaton/json",
    //       "Content-Type":"multipart/form-data"
    //      }
    //   }).then(res=>{
    //  setVariable(-1)
    //  reload(prev=>!prev)
    // }).catch(err=>console.log(err))
       
    }
    const setVar=(id)=>{
      variable!=id?setVariable(id):setVariable(-5)
    }
  const deleteBook=(id)=>{
    //       axios.delete(`http://127.0.0.1:8000/api/user/bookings/${id}`,{                    
    // headers:{
    //       Authorization:localStorage.getItem("token"),
    //       "Accept":"applicaton/json"
    //      }
    //   }).then(res=>{
    //  reload(prev=>!prev)
    // }).catch(err=>console.log(err))
  }
  const deleteMessage=(id)=>{
    //       axios.delete(`http://127.0.0.1:8000/api/messages/${id}`,{                    
    // headers:{
    //       Authorization:localStorage.getItem("token"),
    //       "Accept":"applicaton/json"
    //      }
    //   }).then(res=>{
    //  reload(prev=>!prev)
    // }).catch(err=>console.log(err))
  }
  return (
    <>
    <div className="show">
{flight?<><div className="showImg"><img  src='/assets/img/plane.jpg'/></div>
<div className="showText">      
      <p>Country: {flight.country}</p>
      <p>City: {flight.city}</p>
      <p>Price: {flight.price}$</p>
      <p>Points: {flight.points}</p>
      <p>class_A_seats: {flight.class_A_seats}</p>
      <p>class_B_seats: {flight.class_B_seats}</p>
      <p>departure_time: {flight.departure_time}</p>
      <p>arrival_time: {flight.arrival_time}</p>
      </div>
      <Button text="Back" link="./.."/></>:""}</div>
        {bookings?.map((booking)=>{
    return(
      <div className="show">
      <div className="showText" key={booking.id}>      
      <p>user_id: {booking.user_id}</p>
      <p>flight_id: {booking.flight_id}</p>
      <p>seats_number: {booking.seats_number}$</p>
      <p>total_price: {booking.total_price}</p>
      <p>class: {booking.class}</p>
      <p><span className={variable==booking.id?"hidden":"active"}>{booking.status}</span>
          <form className={variable==booking.id?"active":"hidden"} onSubmit={(event)=>handle(event,booking.id)}>
            <select onChange={(event)=>setStatus(event.target.value)}>
            {booking.status=="pending"?<option value="pending" selected>pending</option>:<option value="pending" >pending</option>}
            {booking.status=="approved"?<option value="approved" selected>approved</option>:<option value="approved" >approved</option>}
          <option value="canceled" >canceled</option>
        </select>
        <input type="submit" className="submit"value="edit" /></form></p>
      </div>
      {access=="user"?<button className="delete" onClick={()=>deleteBook(booking.id)}>delete</button>:<button onClick={()=>setVar(booking.id)}>update</button>}
      </div>
    )
  })}
      <div className="show">
{messages?.map((message)=>{
  return(<>
<div className="showText" key={message.id}>       
      <p style={{ width:"100%" }}>name: {message.name}</p>
      <p style={{ width:"100%" }}>email: {message.email}</p>
      <p style={{ width:"100%" }}>subject: {message.subject}$</p>
      <p style={{ width:"100%" }}> {message.message}</p>
      </div>
      <button className="delete" onClick={()=>deleteMessage(message.id)}>delete</button></>)
})
}</div>
  </>
  )
}

export default Show
