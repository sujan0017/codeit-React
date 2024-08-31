import api from "./api";

const login = async ({ email, password }) => {
  const response = await api.post(`/auth/login`, {
    email,
    password,
  });
  return response;
};

const signUp = async ({ name, email, password, confirmPassword }) => {
  const response = await api.post(`/auth/register`, {
    name,
    email,
    password,
    confirmPassword,
  });
  return response;
};

export { login, signUp };
