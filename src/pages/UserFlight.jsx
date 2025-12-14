import { useEffect, useState } from "react"
import Card from "../components/Card/Card"
import Section from "../components/Section/Section"
import UpperImg from "../components/UpperImg/UpperImg"
import UpperText from "../components/UpperText/UpperText"



const UserFlight = () => {
      const[flights,setFlights]=useState([{id:4,country:"Syria",
    city:"Homs",price:6,points:1000,class_A_seats:20,class_B_seats:30,departure_time:"20/12/2025 10:00am",arrival_time:"20/12/2025 2:00pm"
  }])
      const[reload,setReload]=useState(false)
      // useEffect(()=>{
      //   axios.get("http://127.0.0.1:8000/api/flights",{
      //     headers:{
      //       Authorization:localStorage.getItem("token"),
      //       "Accept":"applicaton/json",
      //     }
      //   }).then(res=>setFlights(res.data))
      //   .catch(err=>console.log(err))
      // },[reload])
  return (
    <div>
            <UpperImg image='/trippy/assets/img/flight.jpg' title='Flights'/>
      <UpperText title="Choose a Flight"/>
      <Section>
       <Card flights={flights} image='/trippy/assets/img/plane.jpg' access="user" reload={setReload}/>
      </Section>
    </div>
  )
}

export default UserFlight
