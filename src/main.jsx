import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import Auth from './pages/Auth.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Flights from './pages/Flights.jsx'
import Bookings from './pages/Bookings.jsx'
import Messages from './pages/Messages.jsx'
import Admin from './pages/Admin.jsx'
import ShowFlight from './pages/ShowFlight.jsx'
import CreateFlight from './pages/CreateFlight.jsx'
import UpdateFlight from './pages/UpdateFlight.jsx'
import Welcom from './pages/Welcom.jsx'
import UserBooking from './pages/UserBooking.jsx'
import UserFlight from './pages/UserFlight.jsx'
import BookFlight from './pages/BookFlight.jsx'
const routes=createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      },
            {
        path:"service",
        element:<Service />
      },
            {
        path:"contact",
        element:<Contact />
      }
    ]},
    {
        path:"auth",
        element:<Auth />,
        children:[
          {
            path:"login",
            element:<Login />
          },
            {
            path:"register",
            element:<Register />
          }
        ]

    },
    {
      path:"dashboard",
      element:<Dashboard />,
      children:[
        {
        path:"",
         element:<Admin />,
        },
        {
        path:"flights",
         element:<Flights />,
        },{
          path:"flights/create",
          element:<CreateFlight />
        },
        {
        path:"flights/edit/:id",
         element:<UpdateFlight />,
        },
        {
        path:"flights/:id",
         element:<ShowFlight />,
        },
        {
        path:"bookings",
         element:<Bookings />,
        },
        {
        path:"Messages",
         element:<Messages />,
        }
      ]
    },{
      path:"user",
      element:<Welcom />,
      children:[
        {
          path:"flights",
          element:<UserFlight />
        }, {
        path:"flights/:id",
         element:<ShowFlight />,
        },
          {
          path:"bookFlight/:id",
          element:<BookFlight />
        },
          {
          path:"bookings",
          element:<UserBooking />
        }
      ]
    }

],{basename:"/trippy"})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>
)
