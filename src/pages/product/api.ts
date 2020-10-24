import axios from "axios";

import authHelpers from "helpers/auth";
import { API_URL } from "constants/api";

export const loadProducts = async () => {
  const { data }= await axios.get(`${API_URL}/products`,
    {
      headers: {
      'Authorization': 'Bearer ' + authHelpers.getToken()
    }
  });

  console.log("Products: ", data);
  return data;
  
};
