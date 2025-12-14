import { Link, useNavigate } from "react-router-dom"
import "./ContactForm.css"

const ContactForm = ({title,inputs,textarea,submitText,message,link,linkText,ChangeData,checkbox,submitlink}) => {
  let data=inputs[0]?.value?{city:inputs[0]?.value,country:inputs[1]?.value,
    price:inputs[2]?.value,points:inputs[3]?.value,departure_time:inputs[4]?.value,
    arrival_time:inputs[5]?.value
  }:{}
 const navigate=useNavigate()
  const handle=(event)=>{
    event.preventDefault()
    navigate(submitlink)
    ChangeData(data)
  }
  return (
  
      <form className="contactForm" onSubmit={handle}>
        
        <h1>{title}</h1>
        {inputs?.map((input,index)=>{
            return (input.type=="datetime-local"?<><p>{input?.text}</p><input key={index} defaultValue={input.value} type={input?.type} onChange={(event)=>{data={...data,[input?.name]:event.target.value}}}/></>
          :<input key={index} defaultValue={input.value} type={input?.type} placeholder={input?.text} onChange={(event)=>{data={...data,[input?.name]:event.target.value}}}/>)
        })}
        {
          textarea?<textarea placeholder={textarea.text} onChange={(event)=>{data={...data,[textarea?.name]:event.target.value}}}></textarea>:""
        }
        {
          checkbox?.map((check,index)=>{
            return(<>
            <label >{check.text}</label>
            <input className="radio" type={check.type} name="class" onChange={(event)=>{data={...data,[check?.name]:check?.value}}}/></>)
          })
            
          
        }
        <input type="submit" value={submitText} className="submit" />
        <p>{message}{link?<Link to={link}>{linkText}</Link>:""}</p>
        
      </form>
 
  )
}

export default ContactForm
