import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import Home from "./components/Home.jsx";

const router=createBrowserRouter([
    {
        path: '/',
        element: <App/>, children: [
            {path: '/', element: <Home/>},
            {path: '/create-post', element: <CreatePost/>},
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
