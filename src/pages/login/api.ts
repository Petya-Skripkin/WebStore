import axios from "axios";
import { API_URL } from "constants/api";

export async function login(email, password) {
  const { data } = await axios.post(`${API_URL}token/`,
  JSON.stringify({
    email,
    password
  }),
  {
    headers: {
      "Content-Type": "application/json"
    }
  });

  return data;
}