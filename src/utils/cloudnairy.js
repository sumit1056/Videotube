import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// code to upload file on cloudinary
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null

        // Upload file to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
             resource_type: "auto" 
            });
        //file hass been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the local file saved temporary file as the uploaq opertaion got failed
        return null;
    }
}



export {uploadOnCloudinary}