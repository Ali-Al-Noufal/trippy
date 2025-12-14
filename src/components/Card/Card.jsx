
import "./Card.css"
import Button from "../Button/Button"
import { useEffect } from "react"



function Card({cards,flights,image,reload,access}) {
  
  const deleteFlight=(id)=>{
  
  // axios.delete(`http://127.0.0.1:8000/api/flights/${id}`,{                    
  //   headers:{
  //         Authorization:localStorage.getItem("token"),
  //         "Accept":"applicaton/json"
  //        }
  //     }).then(res=>{
  //    reload(prev=>!prev)
  //   }).catch(err=>console.log(err))
  }

  return (
    <div className="cards">
      {cards?.map((card,index)=>{
        return(
         <div className="card" key={index}>
            <img src={card?.img} />
            <h2>{card?.title}</h2>
            <p>{card?.description}</p>
         </div>
        )
      })}
       {
        flights?.map((flight)=>{
          return(
            <div className="card">
              <img src={image} />
              <h2>{flight?.id}</h2>
              <p>book your trip now!</p>
              <br />
              <hr />
              <Button text="show" link={`${flight.id}`}/>
              {access=="user"?<Button text="book" link={`/user/bookFlight/${flight.id}`}/>:<> <Button text="update" link={`edit/${flight.id}`}/>
              <button className="delete" onClick={()=>deleteFlight(flight.id)}>Delete</button></>}
              </div>
        )
        })
        }
       

    </div>
  )
}

export default Card
