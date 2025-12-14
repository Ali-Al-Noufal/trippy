import { useEffect, useState } from "react"
import UpperImg from "../components/UpperImg/UpperImg"
import UpperText from "../components/UpperText/UpperText"


import Section from "../components/Section/Section"
import Show from "../components/Show/Show"



const Messages = () => {
  const[messages,setMessages]=useState([{
    name:"ali",email:'ali@gmail.com',subject:"test message",message:"this is a test message to see the content on the screen"
  }])
  const[reload,setReload]=useState(false)
      // useEffect(()=>{
      //   axios.get("http://127.0.0.1:8000/api/messages",{
      //     headers:{
      //       Authorization:localStorage.getItem("token"),
      //       "Accept":"applicaton/json",
      //     }
      //   }).then(res=>{setMessages(res.data)
       
      //   }
      //     )
      //   .catch(err=>console.log(err))
      // },[reload])
      
  return (
    <div>
      <UpperImg image='/trippy/assets/img/message.jpg' title='Messages'/>
      <UpperText title="Show All tour Messages"/>
      <Section>
        <Show messages={messages} reload={setReload}/>
      </Section>
    </div>
  )
}

export default Messages
