import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAuthStatus = () => {
    return useQuery({
        queryKey: ["Auth"],
        queryFn: async () => {
            const endpoint = import.meta.env.VITE_API_ENDPOINT;
            return await axios.get(`${endpoint}/api/auth/status`, { withCredentials: true });
        },
        refetchOnMount: true,
        refetchOnReconnect: true,
    });
};

export default useAuthStatus;
