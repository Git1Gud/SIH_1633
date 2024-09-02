import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Posts,Home,DashBoard,Donations,Settings,Alumnis, Profile,NotFound404} from './components/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoard />,
    errorElement: <NotFound404/>,
    children: [
      {
        path: '/',
        element: <Home />
      },{
        path: '/Posts',
        element: <Posts /> //change
      },{
        path: '/Donation',
        element: <Donations /> //change
      },{
        path: '/Alumnis',
        element: <Alumnis /> //change
      },{
        path: '/Settings',
        element: <Settings /> //change
      },{
        path:'/Profile/:username',
        element: <Profile/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
