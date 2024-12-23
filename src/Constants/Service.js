import axios from "axios";
import { authApi, getProductData, productData } from "./index";

export const authLogIn = async (postData) => {
  try {
    const response = await axios.post(authApi, postData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(productData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (prodId) => {
  try {
    const response = await axios.get(`${getProductData}/${prodId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
