
import ContactForm from "../components/ContactForm/ContactForm"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


const Login = () => {
  const[data,setData]=useState({})
  const navigate=useNavigate()
      const inputs=[
    {
      type:"email",
      text:"Email",
      name:"email"
  },
    {
      type:"password",
      text:"********",
      name:"password"
  }]
//   useEffect(()=>{
// if(data.email){
//       axios.post("https://ali-noufal.vercel.app/api/login",data,{
//       headers:{
//         "Accept":"applicaton/json",
//         "Content-Type":"multipart/form-data"
//       }
//     }).then(res=>{
//       console.log(res)
//       localStorage.setItem("token",`Bearer ${res.data.data.token}`)
//       if(data.email=="admin@gmail.com"){
//          navigate("/dashboard")
//       }else{
//          navigate("/user/flights")
//       }
//     })
//     .catch(err=>console.log(err))
// }
//   },[data])
  return (
    <div>
              <ContactForm title="Sign in" inputs={inputs} submitText="Sign in" submitlink="/dashboard"
              message="don't have an email?" link="/auth/register" linkText="register" ChangeData={setData}/>

    </div>
  )
}

export default Login
