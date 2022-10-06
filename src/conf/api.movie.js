import axios from "axios";

const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/4",
});

apiMovie.interceptors.request.use((req) => {
  req.headers["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUyYmI3MDFiNTY1ZWJlYWI4YzAwZWVjZDVlYmQ3MyIsInN1YiI6IjYzM2VkOWY0NmU5MzhhMDA4MTFhYTgxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VB1bDsxE3EcatgRIn3hu9UJLF00Nbb3nWPLv9NkIK8c";
  return req;
});

export default apiMovie;
