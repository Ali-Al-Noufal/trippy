import { FaBehanceSquare, FaBriefcase, FaFacebookSquare, FaHouseUser, FaInstagram, FaTwitterSquare } from "react-icons/fa"
import { FaCircleInfo } from "react-icons/fa6"
import { RiContactsBookFill } from "react-icons/ri"
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"


const Root = () => {
    const navitems=[
    { content:"Home",
      icon:<FaHouseUser />,
      link:"/"
    },
    { content:"About",
      icon:<FaCircleInfo />,
      link:"/about"
    },
    { content:"Services",
      icon:<FaBriefcase />,
      link:"/service"
    },
    { content:"Contact",
      icon:<RiContactsBookFill />,
      link:"/contact"
    }
    ]
    const icons=[<FaFacebookSquare />,<FaInstagram />,<FaBehanceSquare />,<FaTwitterSquare />]
    let lists=[{title:"Project",arr:['changeleo','status','linces','All verison']},
{title:"Community",arr:['GitHub','issues','project','Twitter']},
{title:"Help",arr:['support','troubleshooting','contact us']},
{title:"Others",arr:['Terms of service','Privacy Policy','license']}]
  return (
    <div>
        <NavBar logo="Trippy" items={navitems} btn="sign up" btn_link="/auth/register" />
        <Outlet />
        <Footer title="Trippy" description="choose your favourite destination" icons={icons} lists={lists} />
    </div>
  )
}

export default Root
