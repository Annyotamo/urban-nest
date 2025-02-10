import React, { useEffect, useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isWithinInterval, addMonths, subMonths, isAfter, isBefore } from "date-fns";
import classNames from "classnames";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const DatePicker = ({ setDate, listingId }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [bookedDates, setBookedDates] = useState([]);

    const { data, isSuccess } = useQuery({
        queryKey: ["booking"],
        queryFn: async () => await axios.get("http://localhost:8080/api/booking/all"),
        refetchOnMount: true,
    });

    useEffect(() => {
        if (startDate != null && endDate != null) {
            setDate({
                start: startDate,
                end: endDate
            });
        }

        if (isSuccess) {
            const filteredBookings = data.data
                .filter(booking => booking.listing === listingId)
                .map(booking => ({
                    start: new Date(booking.date.start),
                    end: new Date(booking.date.end)
                }));
            setBookedDates(filteredBookings);
        }
    }, [startDate, endDate, data]);

    const updateMonth = (newMonth) => {
        setCurrentMonth(newMonth);
        setStartDate(null);
        setEndDate(null);
    };

    const daysInMonth = eachDayOfInterval({ start: startOfMonth(currentMonth), end: endOfMonth(currentMonth) });

    const isDateBooked = (day) => {
        return bookedDates.some(booking => isWithinInterval(day, { start: booking.start, end: booking.end }));
    };

    const handleDateClick = (day) => {
        if (isDateBooked(day)) return;

        if (!startDate || (startDate && endDate)) {
            setStartDate(day);
            setEndDate(null);
        } else if (day > startDate) {
            setEndDate(day);
        } else {
            setStartDate(day);
            setEndDate(null);
        }
    };

    return (
        <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
            {/* Month and Year Navigation */}
            <div className="flex justify-between items-center mb-2">
                <button onClick={() => updateMonth(subMonths(currentMonth, 1))} className="px-2 py-1 rounded ">
                    <FaArrowAltCircleLeft className="text-brown-700" />
                </button>
                <span className="font-semibold">{format(currentMonth, "MMMM yyyy")}</span>
                <button onClick={() => updateMonth(addMonths(currentMonth, 1))} className="px-2 py-1 rounded">
                    <FaArrowAltCircleRight className="text-brown-700" />
                </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="font-semibold text-gray-500 text-sm">{day}</div>
                ))}
                {daysInMonth.map((day) => (
                    <button
                        key={day}
                        onClick={() => handleDateClick(day)}
                        disabled={isDateBooked(day)}
                        className={classNames(
                            "w-10 h-10 flex items-center justify-center rounded-full text-sm transition disabled:bg-red-200",
                            isSameDay(day, startDate) || isSameDay(day, endDate)
                                ? "bg-blue-500 text-white"
                                : isWithinInterval(day, { start: startDate || currentMonth, end: endDate || currentMonth })
                                    ? "bg-blue-200 text-blue-900"
                                    : isDateBooked(day)
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "hover:bg-gray-100 text-gray-700"
                        )}
                    >
                        {format(day, "d")}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DatePicker;