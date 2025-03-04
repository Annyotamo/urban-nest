import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useCreateBooking = (lid) => {
    const nav = useNavigate();
    const [bookingError, setBookingError] = useState(null);

    const { mutateAsync: createBooking, isLoading } = useMutation({
        mutationKey: ["create-booking"],
        mutationFn: async (values) => {
            const endpoint = import.meta.env.VITE_API_ENDPOINT;
            return await axios.post(
                `${endpoint}/api/booking/create`,
                {
                    date: values.date,
                    guests: values.guests,
                    lid: lid,
                },
                { withCredentials: true }
            );
        },
        onSuccess: () => {
            toast.success("Booking successfully created");
            nav("/");
        },
        retry: false,
        onError: (error) => {
            setBookingError(error);
        },
    });

    return { createBooking, isLoading, bookingError, setBookingError };
};

export default useCreateBooking;
