import axios from "axios";
import { IMembers } from "../redux/slices/members.slice";

const api = axios.create({
  baseURL: "http://localhost:9000",
});

export const getMessages = () =>
  api.get("/messages/sync").then((res) => res.data);

export const getRooms = () => api.get("/rooms/sync").then((res) => res.data);

export const postRoom = (postRoom: IMembers) =>
  api.post("/rooms/new", postRoom).then((res) => res.data);
