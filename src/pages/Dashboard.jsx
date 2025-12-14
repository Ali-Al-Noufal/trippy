import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import { GiCommercialAirplane } from "react-icons/gi"
import { SiMdbook } from "react-icons/si"
import { AiFillMessage } from "react-icons/ai"
import Footer from "../components/Footer/Footer"
import { FaBehanceSquare, FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa"


const Dashboard = () => {
        const navitems=[
        { content:"Flights",
            icon:<GiCommercialAirplane />,
          link:"flights"
        },
        { content:"Bookings",
          icon:<SiMdbook />,
          link:"/dashboard/bookings"
        },
        { content:"Messages",
            icon:<AiFillMessage />,
          link:"/dashboard/Messages"
        }
        ]
            const icons=[<FaFacebookSquare />,<FaInstagram />,<FaBehanceSquare />,<FaTwitterSquare />]
            let lists=[{title:"Project",arr:['changeleo','status','linces','All verison']},
        {title:"Community",arr:['GitHub','issues','project','Twitter']},
        {title:"Help",arr:['support','troubleshooting','contact us']},
        {title:"Others",arr:['Terms of service','Privacy Policy','license']}]
  return (
    <div>
      <NavBar logo="Trippy" items={navitems} btn="logout" />
      <Outlet />
      <Footer title="Trippy" description="choose your favourite destination" icons={icons} lists={lists} />
    </div>
  )
}

export default Dashboard
