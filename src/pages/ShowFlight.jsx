import { useParams } from "react-router-dom"
import Show from "../components/Show/Show"
import { useEffect, useState } from "react"
import Hero from "../components/Hero/Hero"
import UpperText from "../components/UpperText/UpperText"
import UpperImg from "../components/UpperImg/UpperImg"


const ShowFlight = () => {
const params=useParams()
const[flight,setFlight]=useState({id:4,country:"Syria",
    city:"Homs",price:6,points:1000,class_A_seats:20,class_B_seats:30,departure_time:"20/12/2025 10:00am",arrival_time:"20/12/2025 2:00pm"
  })
// useEffect(()=>{
//   axios.get(`http://127.0.0.1:8000/api/flights/${params.id}`,{                    
//     headers:{
//           Authorization:localStorage.getItem("token"),
//           "Accept":"applicaton/json"
//          }
//       }).then(res=>{
//      setFlight(res.data)
//     }).catch(err=>console.log(err))
// },[])
  return (
    <div>
            <UpperImg image='/trippy/assets/img/flight.jpg' title='Flight Details'/>
            <UpperText title="This all the Details you Need!"/>
      <Show flight={flight}/>
    </div>
  )
}

export default ShowFlight
