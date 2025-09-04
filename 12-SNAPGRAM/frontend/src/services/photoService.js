import { api, requestConfig } from "../utils/config";

// publish and user photo
const publishPhoto = async (data, token) => {
  const config = requestConfig("POST", data, token, true);

  try {
    const res = await fetch(`${api}/photos`, config);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const photoService = {
  publishPhoto,
};


export default photoService;
