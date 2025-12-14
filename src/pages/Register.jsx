import { useEffect, useState } from "react"
import ContactForm from "../components/ContactForm/ContactForm"
import { useNavigate } from "react-router-dom"


const Register = () => {
  const[data,setData]=useState({})
  const navigate=useNavigate()
      const inputs=[
      {
      type:"text",
      text:"user_name",
      name:"name"
  },
    {
      type:"email",
      text:"Email",
      name:"email"
  },
    {
      type:"password",
      text:"********",
      name:"password"
  },
    {
      type:"password",
      text:"*********",
      name:"password_confirmation"
  }]
//   useEffect(()=>{
// if(data.email){
//       axios.post("https://ali-noufal-trippy.free.nf/api/register",data,{
//       Headers:{
//         "Accept":"applicaton/json",
//         "Content-Type":"multipart/form-data"
//       }
//     }).then(res=>{
//       console.log(res)
//       localStorage.setItem("token",`Bearer ${res.data.data.token}`)
//        navigate("/user/flights")
//     })
//     .catch(err=>console.log(err))
// }
//   },[data])
  return (
    <div>
              <ContactForm title="Register" inputs={inputs} submitText="Register" submitlink="/user/flights"
              message="already have an email?" link="/auth/login" linkText="login" ChangeData={setData}/>

    </div>
  )
}

export default Register
