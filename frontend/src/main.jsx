import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import UserLogin from './components/login-register/UserLogin.jsx'
import UserRegister from './components/login-register/UserRegister.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/user-login",
        element: <UserLogin />
    },
    {
        path: "/user-register",
        element: <UserRegister />
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </StrictMode>

)
