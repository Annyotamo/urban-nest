import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetListings = () => {
    return useQuery({
        queryKey: ["listings"],
        queryFn: async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/listing/all");
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        retry: false,
    });
};

export default useGetListings;
