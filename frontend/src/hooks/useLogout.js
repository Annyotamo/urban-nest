import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/slices/auth/auth.slice";

const useLogout = (closeModal) => {
    const dispatch = useDispatch();

    return useMutation({
        mutationKey: ["Logout"],
        mutationFn: async () =>
            await axios.post("http://localhost:8080/api/auth/logout", {}, { withCredentials: true }),
        onSuccess: () => {
            dispatch(setAuth(false));
            closeModal(!true);
        },
    });
};

export default useLogout;
