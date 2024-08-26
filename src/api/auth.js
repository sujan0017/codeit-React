import axios from "axios";
import config from "../config/config";


const login = async ({ email, password }) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, {
    email,
    password,
  });
  return response;
};

const signUp = async ({ name, email, password, confirmPassword }) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, {
    name,
    email,
    password,
    confirmPassword,
  });
  return response;
};

export { login, signUp };
