import { useMutation } from "@tanstack/react-query";

import { postFormData } from "../api/axios";
import Endpoints from "../api/Endpoints";

// single file
const uploadImage = async (file) => {
    if (!(file instanceof File)) {
        throw new Error("Please select a valid image file");
    }

    const formData = new FormData();
    formData.append("file", file, file.name);

    const response = await postFormData(Endpoints.UPLOAD_IMAGE, formData);

    return response?.result?.url;
};

export const useUploadImage = () => useMutation({
    mutationFn: uploadImage,
});

// multiple file
