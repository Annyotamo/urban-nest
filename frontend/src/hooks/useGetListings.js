import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetListings = () => {
    return useQuery({
        queryKey: ["listings"],
        queryFn: async () => {
            const endpoint = import.meta.env.VITE_API_ENDPOINT;
            const response = await axios.get(`${endpoint}api/listing/all`);
            return response.data;
        },
        retry: false,
    });
};

export default useGetListings;
