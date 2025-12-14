import { Outlet } from "react-router-dom"
import Section from "../components/Section/Section"


const Auth = () => {
  return (
    <div>
        <Section>
            <Outlet />
        </Section>
    </div>
  )
}

export default Auth
