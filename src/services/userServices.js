import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
  //submit data
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};

const putUpdateNewUser = (id, username, role, image) => {
  //submit data
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const getAllUsersWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const deleteUser = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};

const postLogin = (email, password) => {
  return axios.post("/api/v1/login", {
    email,
    password,
    // delay: 1000, //ms
  });
};

const postRegister = (email, password, username) => {
  return axios.post("api/v1/register", {
    email,
    password,
    username,
  });
};

const getQuizByUser = () => {
  return axios.get("api/v1/quiz-by-participant");
};

const getDataQuizById = (quizId) => {
  return axios.get(`api/v1/questions-by-quiz?quizId=${quizId}`);
};

const postSubmitQuiz = (data) => {
  console.log({...data});
  return axios.post(`/api/v1/quiz-submit`, {...data});
};


export {
  postCreateNewUser,
  getAllUsers,
  putUpdateNewUser,
  deleteUser,
  getAllUsersWithPaginate,
  postLogin,
  postRegister,
  getQuizByUser,
  getDataQuizById,
  postSubmitQuiz
};
