import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAuthStatus = () => {
    return useQuery({
        queryKey: ["Auth"],
        queryFn: async () => await axios.get("http://localhost:8080/api/auth/status", { withCredentials: true }),
        refetchOnMount: true,
        refetchOnReconnect: true,
    });
};

export default useAuthStatus;
