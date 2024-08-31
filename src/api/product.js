
import api from "./api";

const getList = async ({
  filters = {},
  sort = { createdAt: -1 },
  limit = 10,
}) => {
  const query = `limit=${limit}&offset=0&sort=${JSON.stringify(
    sort
  )}&filters=${JSON.stringify(filters)}`;

  const response = await api.get(`/products?${query}`);

  return response;
};

const getById = async (id) => {
  const response = await api.get(`/products/${id}`);

  return response;
};

const getCategories = async () => {
  const response = await api.get(`/products/categories`);

  return response;
};

const addProduct = async ({ name, category, brand, price }) => {
  const response = await api.post(`/products`, {
    name,
    category,
    brand,
    price,
  });

  return response;
};

export { getList, getById, getCategories, addProduct };
