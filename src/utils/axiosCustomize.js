import axios from "axios";
import NProgress from "nprogress";
import { store } from "../redux/store";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
});

const instance = axios.create({
  baseURL: "http://localhost:8081/",
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    console.log("Check store:", store.getState());
    const access_token = store?.getState()?.user?.account?.access_token;
    config.headers["Authorization"] = "Bearer " + access_token;
    NProgress.start();
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

//interceptor : middleware
instance.interceptors.response.use(
  //only get response.data
  function (response) {
    NProgress.done();
    // console.log(">>> interceptor", response);
    return response && response.data ? response.data : response;
  },
  function (error) {
    // console.log(">>> run error: ", error.response);
    NProgress.done();
    return error && error.response & error.response.data
      ? error.response.data
      : Promise.reject(error);
  }
);

export default instance;
