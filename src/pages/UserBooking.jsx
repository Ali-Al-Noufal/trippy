
import { useEffect, useState } from "react"
import UpperImg from "../components/UpperImg/UpperImg"
import UpperText from "../components/UpperText/UpperText"

import Section from "../components/Section/Section"
import Show from "../components/Show/Show"


const UserBooking = () => {
        const[bookings,setBookings]=useState([{
      user_id:1,flight_id:4,seats_number:5,total_price:24.00,class:"A",status:"pending"
    }])
    const[reload,setReload]=useState(false)
    const head=["flight_id","seats_number","total_price","class","status","action"]
    // useEffect(()=>{
    //   axios.get("http://127.0.0.1:8000/api/user/bookings",{
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
      <UpperText title="show your Bookings"/>
      <Section><Show heads={head} bookings={bookings} reload={setReload} access="user"/></Section>
    </div>
  )
}

export default UserBooking
