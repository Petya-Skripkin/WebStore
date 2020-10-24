import axios from "axios";

import authHelpers from "helpers/auth";
import { API_URL } from "constants/api";

export const loadCategories = async () => {
  const { data }= await axios.get(`${API_URL}/products`,
    {
      headers: {
      'Authorization': 'Bearer ' + authHelpers.getAccessToken()
    }
  });

  console.log("Categories: ", data);
  return data;
  
};
