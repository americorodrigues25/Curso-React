import { api, requestConfig } from "../utils/config";

// get user details
const profile = async (data, token) => {
  const config = requestConfig("GET", data, token);

  try {
    const res = await fetch(`${api}/users/profile`, config);
    return await res.json();
  } catch (error) {
    console.log(error);
    return { error: "Erro ao buscar perfil" };
  }
};

// update user details
const updateProfile = async (data, token) => {
  const config = requestConfig("PUT", data, token, true);

  try {
    const res = await fetch(`${api}/users/profile`, config);
    return await res.json();
  } catch (error) {
    return { error: "Erro ao atualizar perfil" };
  }
};

const userService = {
  profile,
  updateProfile,
};

export default userService;
