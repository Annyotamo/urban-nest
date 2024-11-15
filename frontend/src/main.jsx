import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Login from './components/login-register/Login.jsx'
import Register from './components/login-register/Register.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/user-login",
        element: <Login />
    },
    {
        path: "/user-register",
        element: <Register />
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <StrictMode>
            <App />
        </StrictMode>
    </RouterProvider>
)
