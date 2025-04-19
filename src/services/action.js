import axios from "axios";
const API_URL = "https://ecombackend-ckue.onrender.com/api/v1"; // Replace with your actual API URL

export const getStore = async () => {
  const response = await axios.get(`${API_URL}/store`);
  return response.data;
};

export const getStoreProducts = async (id) => {
  const response = await axios.get(`${API_URL}/product/${id}`);
  return response.data;
};

export const createOrder = async (data) => {
  const response = await axios.post(`${API_URL}/order`, data);
  return response.data;
};
