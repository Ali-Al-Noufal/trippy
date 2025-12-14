import { useNavigate, useParams } from "react-router-dom"
import ContactForm from "../components/ContactForm/ContactForm"
import UpperImg from "../components/UpperImg/UpperImg"
import { useEffect, useState } from "react"



const UpdateFlight = () => {
const params=useParams()
const[flight,setFlight]=useState({})
const [data,setData]=useState({})
const navigate=useNavigate()
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
// useEffect(()=>{
//   axios.post(`http://127.0.0.1:8000/api/flights/edit/${params.id}`,{...data,"_method":"put"},{                    
//     headers:{
//           Authorization:localStorage.getItem("token"),
//           "Accept":"applicaton/json",
//           "Content-Type":"multipart/form-data"
//          }
//       }).then(res=>{
//      navigate("/dashboard/flights")
//     }).catch(err=>console.log(err))
// },[data])
    const inputs=[
        {
            type:"text",
            text:"Country",
            name:"country",
            value:flight.country
        },
        {
            type:"text",
            text:"City",
            name:"city",
            value:flight.city
        },
        {
            type:"number",
            text:"price",
            name:"price",
            value:flight.price
        },
        {
            type:"number",
            text:"points",
            name:"points",
            value:flight.points
        },
    {
        type:"datetime-local",
        text:"departure_time",
        name:"departure_time",
        value:flight.departure_time
    },    {
        type:"datetime-local",
        text:"arrival_time",
        name:"arrival_time",
        value:flight.arrival_time
    }]
  return (
    <div>
        <UpperImg image='/trippy/assets/img/flight.jpg' title="UPDATE FLIGHT"/>
      <ContactForm title="update flight"inputs={inputs} submitText="update" submitlink="/dashboard/flights" ChangeData={setData}/>
    </div>
  )
}

export default UpdateFlight
