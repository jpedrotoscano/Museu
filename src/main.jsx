import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './routes/Home/Home.jsx'
import Dashboard from './routes/Dashboard/Dashboard.jsx'
import Login from './routes/Login/Login.jsx'
import Visitante from './routes/Visitante/Visitante.jsx'

import App from './App.jsx'
import './index.css'
import ErrorPage from './routes/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "visitante",
        element: <Visitante />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
