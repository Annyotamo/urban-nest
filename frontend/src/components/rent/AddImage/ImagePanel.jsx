import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Toaster } from 'react-hot-toast';
import PreviewImages from './PreviewImages';
import { onDrop, onDropRejected } from './imageUtilityFunctions';
import { useDispatch } from "react-redux"
import { images } from '../../../redux/slices/give-rent/giveRent.slice';

const ImageUploadPanel = () => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const serializedFiles = uploadedImages.map(file => ({ name: file.name, size: file.size, type: file.type, preview: file.preview }));
        dispatch(images(serializedFiles))
        return () => {
            dispatch(images(serializedFiles))
        }
    }, [uploadedImages]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => onDrop(acceptedFiles, setUploadedImages),
        onDropRejected,
        accept: {
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/png': ['.png'],
        },
        multiple: true,
    });

    return (
        <div className="h-full overflow-y-auto p-6">
            <Toaster position="top-center" />
            <h2 className="text-xl mb-2">Upload Property Images</h2>
            <p className="text-md text-gray-500 mb-6">Make your property look more stunning</p>

            {/* Dropzone */}
            <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center cursor-pointer"
            >
                <input {...getInputProps()} />
                <p className="text-gray-500">
                    Drag & drop images here, or <span className="text-blue-500 underline">browse</span>
                </p>
                <p className="text-sm text-gray-400 mt-2">Accepted file types: JPG, PNG</p>
            </div>

            {/* Images */}
            <PreviewImages uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} />
        </div>
    );
};

export default ImageUploadPanel;
