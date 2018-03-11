import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-jyesares.firebaseio.com"
});

export default instance;
