
import { GiCommercialAirplane } from "react-icons/gi"
import { SiMdbook } from "react-icons/si"
import NavBar from "../components/NavBar/NavBar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import { FaBehanceSquare, FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa"


const Welcom = () => {
            const navitems=[
            { content:"Flights",
                icon:<GiCommercialAirplane />,
              link:"/user/flights"
            },
            { content:"Bookings",
              icon:<SiMdbook />,
              link:"/user/bookings"
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

export default Welcom
