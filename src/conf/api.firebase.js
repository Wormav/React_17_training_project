import axios from "axios";

const apiFirebase = axios.create({
  baseURL:
    "https://movie-3df8e-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default apiFirebase;
