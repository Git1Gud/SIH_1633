import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import DashBoard from './components/DashBoard.jsx'
import NotFound404 from './components/NotFound404.jsx'

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
        element: <Home /> //change
      },{
        path: '/Donation',
        element: <Home /> //change
      },{
        path: '/Alumnis',
        element: <Home /> //change
      },{
        path: '/Settings',
        element: <Home /> //change
      },{
        path:'/Profile/:username',
        element: <Home/>
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
