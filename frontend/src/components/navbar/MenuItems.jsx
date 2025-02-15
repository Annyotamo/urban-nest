import React, { useState } from 'react'
import MenuItem from './MenuItem'
import { useDispatch } from 'react-redux'
import { useMutation, useQuery } from '@tanstack/react-query'
import { setAuth } from "../../redux/slices/auth/auth.slice.js"
import axios from "axios";
import ErrorOverlay from "../elements/ErrorOverlay.jsx"
const MenuItems = () => {
    const dispatch = useDispatch();
    const [logout, setLogout] = useState(false);
    const { data, isSuccess } = useQuery({
        queryKey: ["Auth"],
        queryFn: async () => await axios.get("http://localhost:8080/api/auth/status", { withCredentials: true }),
        refetchOnMount: true,
        refetchOnReconnect: true,
    })

    const { mutate, isError } = useMutation({
        mutationKey: ["Logout"],
        mutationFn: async () => await axios.post("http://localhost:8080/api/auth/logout", {}, { withCredentials: true }),
        onSuccess: () => {
            dispatch(setAuth(false));
        }
    })

    function handleLogout() {
        setLogout(prev => !prev);
    }

    if (logout) return <ErrorOverlay close={true} closeFunc={() => setLogout(false)} action="Logout" actionFunc={() => { mutate(); setLogout(false); }} message="Are you sure?" />
    if (isSuccess) { console.log(data.data); dispatch(setAuth(data.data.isAuthenticated)) };
    if (isError) return <ErrorOverlay />

    return (
        <div>
            <MenuItem label='Your bookings' endpoint="/user/bookings" />
            <MenuItem label='Favourites' endpoint="/user/favourites" />
            <MenuItem label='Register' endpoint="/user/register" styles="border-t" />
            {(data?.data.isAuthenticated === false || data == null) && <MenuItem label='login' endpoint="/user/login" styles="" />}
            {data?.data.isAuthenticated === true && <MenuItem label='logout' styles="border-t text-red-400" onClick={handleLogout} />}
            <MenuItem label='test' endpoint="/test" styles="border-t text-red-400" />
        </div>
    )
}

export default MenuItems
