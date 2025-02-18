import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAuthStatus = () => {
    return useQuery({
        queryKey: ["auth"],
        queryFn: async () => {
            const endpoint = import.meta.env.VITE_API_ENDPOINT;
            return await axios.get(`${endpoint}api/auth/status`, { withCredentials: true });
        },
    });
};

export default useAuthStatus;
