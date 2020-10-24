import axios from "axios";

import authHelpers from "helpers/auth";
import { API_URL } from "constants/api";

export const loadProducts = async (categoryId) => {
  const { data }= await axios.get(`${API_URL}/products/?category=${categoryId}`,
    {
      headers: {
      'Authorization': 'Bearer ' + authHelpers.getToken()
    }
  });

  console.log("Products: ", data);
  return data;
  
};
