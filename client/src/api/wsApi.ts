import axios from "axios";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { IMessages } from "../interfaces/types";
import { IMembers } from "../redux/slices/members.slice";

const api = axios.create({
  baseURL: "http://localhost:9000",
});

export const useMessages = () => {
  return useQuery<IMessages[]>("messages", () =>
    api.get("/messages/sync").then((res) => res.data)
  );
};

export const useLatestMessage = () => {
  return useQuery("latestMessage", () =>
    api.get("/latest_message/sync").then((res) => res.data)
  );
};

export const usePostMessage = () => {
  const queryClient = useQueryClient();

  const postMessage = (postMessage: IMessages) =>
    api.post("/messages/new", postMessage).then((res) => res.data);

  return useMutation(postMessage, {
    onSuccess: () => {
      queryClient.invalidateQueries("messages");
      queryClient.invalidateQueries("latestMessage");
    },
  });
};

export const useGetRooms = () => {
  return useQuery("rooms", () =>
    api.get("/rooms/sync").then((res) => res.data)
  );
};

export const usePostRoom = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (postRoom: IMembers) => {
      return api.post("/rooms/new", postRoom).then((res) => {
        console.log(res.data);
        return res.data;
      });
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("rooms");
      },
    }
  );
};
