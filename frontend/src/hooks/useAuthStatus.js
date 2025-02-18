import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAuthStatus = () => {
    return useQuery({
        queryKey: ["auth"],
        queryFn: async () => {
            const endpoint = import.meta.env.VITE_API_ENDPOINT;
            const res = await fetch(`${endpoint}/api/auth/status`, { credentials: "include" });
            const data = await res.json();
            console.log(data);
            return data;
        },
    });
};

export default useAuthStatus;
