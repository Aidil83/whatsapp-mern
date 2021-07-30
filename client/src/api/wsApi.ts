import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000",
});

export const getMessages = () =>
  api.get("/messages/sync").then((res) => res.data);

export const getRooms = () => api.get("/rooms/sync").then((res) => res.data);
