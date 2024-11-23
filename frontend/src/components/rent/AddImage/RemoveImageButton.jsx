import { FaTimes } from 'react-icons/fa'

export default function removeImageButton({ index, handleRemoveImage }) {
    return (
        <button
            className="absolute top-2 right-3 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 shadow-md transition-transform transform hover:scale-105"
            onClick={() => handleRemoveImage(index)}
            aria-label="Remove Image"
        >
            <FaTimes size={10} />
        </button>
    )
}

