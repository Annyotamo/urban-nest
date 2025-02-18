import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/slices/auth/auth.slice";

const useLogout = (closeModal) => {
    const dispatch = useDispatch();

    return useMutation({
        mutationKey: ["Logout"],
        mutationFn: async () => {
            const endpoint = import.meta.env.VITE_API_ENDPOINT;
            return await axios.post(`${endpoint}/api/auth/logout`, {}, { withCredentials: true });
        },
        onSuccess: () => {
            dispatch(setAuth(false));
            closeModal(!true);
        },
    });
};

export default useLogout;
