import axios from "axios";

export const getMessages = axios.create({
  baseURL: "http://localhost:9000",
});

// export const getMessages = () =>
//   api.get("/messages/sync").then((res) => res.data);
