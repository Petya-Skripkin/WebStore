import axios from "axios";

import authHelpers from "helpers/auth";
import { API_URL } from "constants/api";

export const loadUser = async () => {
  const { data } = await axios.get(`${API_URL}/users/`,
    {
      headers: {
      'Authorization': 'Bearer ' + authHelpers.getAccessToken()
    }
  });

  console.log("Products: ", data);
  return data;
  
};
