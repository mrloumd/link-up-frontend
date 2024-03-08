//the service is strictly for just making the http request
//sending the data  back and setting any the data in local storage

//axios is for http request
import axios from "axios";
import { UserData } from "../types";

const API_URL = "http://localhost:5000/api/users/";

// Register user
const register = async (userData: UserData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData: UserData) => {
  const response = await axios.post(API_URL + "login", userData);
  console.log("Login response:", response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
