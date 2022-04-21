import axios from "axios";
//THIS IS ALL ABOUT CREATING AN AXIOS INSTANCE WITH CUSTOM CONFIGURATION FOR AXIOS.
//===================================================================================
const instance = axios.create({
  baseURL: "https://tinder-build.herokuapp.com/",
});

export default instance;
