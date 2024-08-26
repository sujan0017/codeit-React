import axios from "axios";
import config from "../config/config";

const getList = async () => {
  const response = await axios.get(`${config.apiUrl}/api/products`);
  return response;
};
const getById = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);
  return response;
};

export { getList, getById };
