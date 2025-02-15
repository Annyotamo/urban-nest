import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const useFavourite = (initialFavourite, lid) => {
    const [isFavorited, setIsFavorited] = useState(initialFavourite);
    const [favError, setFavError] = useState(null);

    const { mutateAsync: favouriteMutate, isLoading: isFavLoading } = useMutation({
        mutationKey: ["add-favourites"],
        mutationFn: async (values) => {
            await axios.post("http://localhost:8080/api/user/favourites", values, {
                withCredentials: true,
            });
        },
        onSuccess: () =>
            !isFavorited
                ? toast.success("Yay! This is now added to your favourites")
                : toast.error("Removed from favorites"),
        retry: false,
        onError: (error) => {
            setFavError(error);
        },
    });

    useEffect(() => {
        setIsFavorited(initialFavourite);
    }, [initialFavourite]);

    const sendFavouriteStatus = async () => {
        await favouriteMutate({ lid, status: !isFavorited });
        setIsFavorited((prev) => !prev);
    };

    return { isFavorited, favError, sendFavouriteStatus, setFavError, isFavLoading };
};

export default useFavourite;
