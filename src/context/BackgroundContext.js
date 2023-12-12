import { createContext, useState, useContext } from "react";
import { ref as storageRef, deleteObject } from "firebase/storage";
import { ref, remove } from "firebase/database";
import UserContext from "../context/UserContext";
import { database, storage } from "../Firebase";
const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
    const { user } = useContext(UserContext);
    const [images, setImages] = useState([]);
    const [progress, setProgress] = useState("");
    const [uploading, setUploading] = useState(false);
    const uploadedImage = images[0]?.url;

    const deleteImage = async (imageId, imageUrl) => {
        // Delete reference from database
        await remove(ref(database, `images/${user.uid}/${imageId}`));
        // Delete image from storage
        try {
            await deleteObject(storageRef(storage, imageUrl));
            console.log("Image deleted from storage");
        } catch (error) {
            console.error("Error deleting image from storage", error);
        }
    };
    return <BackgroundContext.Provider value={{ images, setImages, deleteImage, progress, setProgress, uploading, setUploading, uploadedImage }}>{children}</BackgroundContext.Provider>;
};

export default BackgroundContext;
