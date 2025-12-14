import { useEffect, useState } from "react"
import ContactForm from "../components/ContactForm/ContactForm"
import UpperImg from "../components/UpperImg/UpperImg"
import { useNavigate } from "react-router-dom"


const CreateFlight = () => {
    const[data,setData]=useState({})
    const inputs=[
        {
            type:"text",
            text:"Country",
            name:"country",
        },
        {
            type:"text",
            text:"City",
            name:"city"
        },
        {
            type:"number",
            text:"price",
            name:"price",
        },
        {
            type:"number",
            text:"points",
            name:"points",
        },
    {
        type:"datetime-local",
        text:"departure_time",
        name:"departure_time"
    },    {
        type:"datetime-local",
        text:"arrival_time",
        name:"arrival_time"
    }]
    const navigate=useNavigate()
        // useEffect(()=>{
        //     if(data.city){
        //         axios.post("http://127.0.0.1:8000/api/flights",data,{
        //             headers:{
        //             Authorization:localStorage.getItem("token"),
        //             "Accept":"applicaton/json",
        //             "Content-Type":"multipart/form-data"
        //             }
        //         }).then(res=>{
        //             navigate("/dashboard/flights")
        //         }).catch(err=>console.log(err))
        //     }
        // },[data])
  return (
    <div>
        <UpperImg image='/trippy/assets/img/flight.jpg' title="ADD FLIGHT"/>
      <ContactForm title="create flight"inputs={inputs} submitText="add" ChangeData={setData}/>
    </div>
  )
}

export default CreateFlight
