import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path:'/',
  element:<App />
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='w-2/3 mx-auto mt-16'>
   <RouterProvider router={router}/>
   </div>
  </React.StrictMode>,
)
