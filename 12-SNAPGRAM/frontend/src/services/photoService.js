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

// get user photos
const getUserPhotos = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(`${api}/photos/user/${id}`, config);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

// delete a photo
const deletePhoto = async (id, token) => {
  const config = requestConfig("DELETE", null, token);

  try {
    const res = await fetch(`${api}/photos/${id}`, config);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

// update a photo
const updtatePhoto = async (data, id, token) => {
  const config = ("PUT", data, token);

  try {
    const res = await fetch(`${api}/photos/${id}`, config);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const photoService = {
  publishPhoto,
  getUserPhotos,
  deletePhoto,
  updtatePhoto,
};

export default photoService;
