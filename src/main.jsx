import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About.jsx'
import Game from './Pages/Game.jsx'

const router = createBrowserRouter([
  {
    path: "/SudokuGame",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Game/>
      },
      {
        path: "/About",
        element: <About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
