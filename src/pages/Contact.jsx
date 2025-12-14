import { useEffect, useState } from "react"
import ContactForm from "../components/ContactForm/ContactForm"
import UpperImg from "../components/UpperImg/UpperImg"
import Section from './../components/Section/Section'
import { useNavigate } from "react-router-dom"

const Contact = () => {
  const [data,setData]=useState({})
  const navigate=useNavigate()
  const inputs=[
    {
      type:"text",
      text:"Name",
      name:"name"
  },
    {
      type:"email",
      text:"Email",
      name:"email"
  },
    {
      type:"text",
      text:"Subject",
      name:"subject"
  }]
  const textarea={
    type:"textarea",
    name:"message"
  }
          // useEffect(()=>{
          //     if(data.name){
          //         axios.post("http://127.0.0.1:8000/api/messages",data,{
          //             headers:{
          //             "Accept":"applicaton/json",
          //             "Content-Type":"multipart/form-data"
          //             }
          //         }).then(res=>{
          //           alert(res.data.message)
          //           navigate("/")
          //         }).catch(err=>console.log(err))
          //     }
          // },[data])
  return (
    <div>
      <UpperImg image='/trippy/assets/img/contactbg.jpg' title='Contact'/>
      <Section>
        <ContactForm title="Send a message to us!" inputs={inputs} textarea={textarea} ChangeData={setData} submitText="Send Message"/>
      </Section>
    </div>
  )
}

export default Contact
