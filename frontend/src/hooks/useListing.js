import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const useListing = (lid) => {
    const [listingError, setListingError] = useState(null);

    const { data, isLoading, error } = useQuery({
        queryKey: ["listing", lid],
        queryFn: async () => {
            const endpoint = import.meta.env.VITE_API_ENDPOINT;
            const response = await axios.get(`${endpoint}/api/listing/${lid}`, {
                withCredentials: true,
            });
            return response.data;
        },
        retry: false,
    });

    if (error && !listingError) setListingError(error);

    return { data, isLoading, listingError, setListingError };
};

export default useListing;
