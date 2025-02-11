import React from 'react'

const BookingCategories = ({ category }) => {
    return (
        <div className="mb-8 flex flex-wrap gap-2">
            {category.map((cat, index) => (
                <span
                    key={index}
                    className="bg-beige-100 text-brown-700 px-4 py-2 rounded-full text-sm"
                >
                    {cat}
                </span>
            ))}
        </div>
    )
}

export default BookingCategories
