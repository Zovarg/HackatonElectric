import axios from "../axios";

const endpoints = {
  registration: (data) => axios.post("/register/", data),
  login: (data) => axios.post("/users/login/", data),
  getProfile: () => axios.get("/me/"),
  getDate: () => axios.get("/requests"),
  updateToken: (data) => axios.post("/token/refresh/", data),

};

export default endpoints;
