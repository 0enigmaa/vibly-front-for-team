import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: serverUrl });

export let getAllUsers = () => API.get("/api/user");
export let getOneUser = () => API.get("/api/user/:id");
export let deleteUser = () => API.delete("/api/user/:id");
export let updateUser = () => API.put("/api/user/:id");
export let follow = () => API.put("/api/follow/:id");
export let savedPost = () => API.put("/api/save/:postId");
