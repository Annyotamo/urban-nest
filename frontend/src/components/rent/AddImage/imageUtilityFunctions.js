import toast from "react-hot-toast";

export const onDrop = async (acceptedFiles, setUploadedImages) => {
    if (acceptedFiles.length > 0) {
        const newImages = acceptedFiles.map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
        );
        setUploadedImages((prevImages) => [...prevImages, ...newImages]);

        toast.success(`${acceptedFiles.length} image(s) uploaded successfully!`);
    }
};

export const onDropRejected = (fileRejections) => {
    fileRejections.forEach((rejection) => {
        toast.error(`"${rejection.file.name}" is an invalid file type. Only JPG and PNG are allowed.`);
    });
};

export const handleRemoveImage = (indexToRemove, setUploadedImages) => {
    setUploadedImages((prevImages) => prevImages.filter((_, index) => index !== indexToRemove));
    toast.success("Image removed successfully!");
};
