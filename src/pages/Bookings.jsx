import { useEffect, useState } from "react"
import UpperImg from "../components/UpperImg/UpperImg"
import UpperText from "../components/UpperText/UpperText"
import Show from "../components/Show/Show"


const Bookings = () => {
    const[bookings,setBookings]=useState([{
      user_id:1,flight_id:4,seats_number:5,total_price:24.00,class:"A",status:"pending"
    }])
    const[reload,setReload]=useState(false)
    const head=["user_id","flight_id","seats_number","total_price","class","status","actions"]
    // useEffect(()=>{
    //   axios.get("http://127.0.0.1:8000/api/bookings",{
    //     headers:{
    //       Authorization:localStorage.getItem("token"),
    //       "Accept":"applicaton/json",
    //     }
    //   }).then(res=>setBookings(res.data))
    //   .catch(err=>console.log(err))
    // },[reload])

  return (
    <div>
      <UpperImg image='/trippy/assets/img/booking.jpg' title='Bookings'/>
      <UpperText title="Controlle Bookings"/>
      <Show bookings={bookings} reload={setReload}/>

    </div>
  )
}

export default Bookings
