import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Explore from './pages/Explore/Explore.jsx'
import Notifications from './pages/Notifications/Notifications.jsx'
import Settings from './pages/Settings/Settings.jsx'
import Register from './pages/Register/Register.jsx'
import Message from './pages/Message/Message.jsx'



import { createBrowserRouter, RouterProvider} from "react-router-dom";


const router  = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/Home",
            element: <Home/>
        },
        {
            path: "/Login",
            element: <Login/>
        },
        {
            path: "/Explore",
            element: <Explore/>
        },
        {
          path: "Notifications",
          element: <Notifications/>
        },
        {
          path: "Settings",
          element: <Settings/>
        },
        {
          path: "Register",
          element: <Register/>
        },
        {
          path: "Message",
          element: <Message/>
        }
       
        ]
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </StrictMode>,
)
