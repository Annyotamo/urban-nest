import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { useDispatch } from 'react-redux';
import { setAuth } from "../../redux/slices/auth/auth.slice.js";
import ErrorOverlay from "../elements/ErrorOverlay.jsx";
import { FaHome } from 'react-icons/fa';
import useAuthStatus from '../../hooks/useAuthStatus.js';
import useLogout from '../../hooks/useLogout.js';
import LoadingOverlay from '../elements/LoadingOverlay.jsx';

const MenuItems = ({ closeModal }) => {
    const dispatch = useDispatch();
    const [logout, setLogout] = useState(false);

    const { data: authStatus, isLoading, isError, isSuccess } = useAuthStatus();
    const { mutate: logoutMutate, isError: logoutIsError } = useLogout(closeModal);

    if (isLoading) {
        return <LoadingOverlay />
    }

    if (isError || logoutIsError) {
        return <ErrorOverlay home={true} />; // More specific message
    }

    if (logout) return <ErrorOverlay close={true} closeFunc={() => setLogout(false)} action="Logout" actionFunc={() => { logoutMutate(); setLogout(false); }} message="Are you sure?" />;

    if (isSuccess && authStatus && authStatus.data) {
        dispatch(setAuth(authStatus.data.isAuthenticated));
    }


    return (
        <div>
            <MenuItem label='Profile' endpoint="/user" />
            <MenuItem label='Your bookings' endpoint="/user/bookings" />
            <MenuItem label='Favourites' endpoint="/user/favourites" />
            <MenuItem label='Register' endpoint="/user/register" styles="border-t" />
            {(isSuccess && authStatus && authStatus.data && (authStatus.data.isAuthenticated === false || authStatus.data == null)) && <MenuItem label='login' endpoint="/user/login" />}
            {isSuccess && authStatus && authStatus.data && authStatus.data.isAuthenticated === true && <MenuItem label='logout' styles="text-red-400" onClick={() => setLogout(true)}><FaHome className='mr-2' /></MenuItem>}
        </div>
    );
}

export default MenuItems;