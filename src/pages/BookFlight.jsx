import { useEffect, useState } from "react"
import ContactForm from "../components/ContactForm/ContactForm"
import UpperImg from "../components/UpperImg/UpperImg"
import UpperText from "../components/UpperText/UpperText"
import { useNavigate, useParams } from "react-router-dom"
import Section from "../components/Section/Section"
import { GoAlert } from "react-icons/go"


const BookFlight = () => {
    const [data,setData]=useState({})
    const params=useParams()
    const inputs=[
    {
      type:"number",
      text:"seats_number",
      name:"seats_number"
  }]
  const checkbox=[
    {
      type:"radio",
      text:"class A",
      name:"class",value:"A"
  },    {
      type:"radio",
      text:"class B",
      name:"class",value:"B"
  }]
      const navigate=useNavigate()
        // useEffect(()=>{
        //     if(data.seats_number){
        //         axios.post(`http://127.0.0.1:8000/api/user/bookings/create/${params.id}`,data,{
        //             headers:{
        //             Authorization:localStorage.getItem("token"),
        //             "Accept":"applicaton/json",
        //             "Content-Type":"multipart/form-data"
        //             }
        //         }).then(res=>{
        //              alert(res.data.message)
        //             navigate("/user/bookings")
        //         }).catch(err=>console.log(err))
        //     }
        // },[data])
  return (
    <div>
        <UpperImg image='/trippy/assets/img/booking.jpg' title='Bookings'/>
      <UpperText title="Book Your Flight Now!"/>
      <Section>
        <ContactForm inputs={inputs} checkbox={checkbox} submitText="book" ChangeData={setData}/>
      </Section>
    </div>
  )
}

export default BookFlight
