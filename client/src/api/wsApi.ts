import axios from "axios";
import { useQuery } from "react-query";
import { IMessages } from "../interfaces/types";
import { IMembers } from "../redux/slices/members.slice";

const api = axios.create({
  baseURL: "http://localhost:9000",
});

// export const getMessagesData = () =>
//   api.get("/messages/sync").then((res) => res.data);

export const useMessages = () => {
  return useQuery("currentMessage", () =>
    api.get("/messages/sync").then((res) => res.data)
  );
};

export const getLatestMessageData = () =>
  api.get("/latest_message/sync").then((res) => res.data);

export const postMessage = (postMessage: IMessages) =>
  api.post("/messages/new", postMessage).then((res) => res.data);

export const getRooms = () => api.get("/rooms/sync").then((res) => res.data);

export const postRoom = (postRoom: IMembers) =>
  api.post("/rooms/new", postRoom).then((res) => res.data);
