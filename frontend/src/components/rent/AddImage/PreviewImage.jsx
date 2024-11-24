import RemoveButton from "./RemoveImageButton"
const PreviewImage = ({ image, index, imageCount, setUploadedImages }) => {
    return (
        <div
            key={index}
            className="relative flex-none w-1/2 px-2 opacity-0 transition-opacity duration-500 ease-in-out"
            style={{
                opacity: index >= imageCount && index < imageCount + 2 ? 1 : 0,
            }}
        >
            {/* Image */}
            <img
                src={image.preview}
                alt={`Uploaded ${index}`}
                className="rounded-lg shadow-md object-cover w-full h-40"
            />

            {/* Remove Button */}
            <RemoveButton index={index} setUploadedImages={setUploadedImages} />
        </div>
    )
}

export default PreviewImage
