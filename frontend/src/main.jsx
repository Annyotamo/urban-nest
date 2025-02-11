import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserLogin from './components/login-register/UserLogin.jsx'
import UserRegister from './components/login-register/UserRegister.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Rent from './components/rent/Rent.jsx'
import { Provider } from "react-redux";
import { store } from './redux/store.redux.js'
import Test from './Test.jsx'
import Booking from './components/Booking/Booking.jsx'
import UserBookings from './User/UserBookings.jsx'
import UserFavourites from './User/UserFavourites.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/user/login",
        element: <UserLogin />
    },
    {
        path: "/user/register",
        element: <UserRegister />
    },
    {
        path: "/user/bookings",
        element: <UserBookings />
    },
    {
        path: "/list",
        element: <Rent />
    },
    {
        path: "/listing/:lid",
        element: <Booking />
    },
    {
        path: "/user/favourites",
        element: <UserFavourites />
    },
    {
        path: "/test",
        element: <Test />
    }
])

export const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </QueryClientProvider>
    </Provider>

)
