import mongoose from "mongoose";

export interface IRoom extends mongoose.Document {
  roomName: string;
  title: string;
  image: string;
  members: [{ id: number; title: string; image: string }];
}

// Schema
const RoomSchema = new mongoose.Schema<IRoom>({
  roomName: { type: String, required: true },
  title: { type: String, required: true },
  image: String,
  members: [{ id: Number, title: String, image: String }],
});

// Collection
const Rooms = mongoose.model<IRoom>("roomcontents", RoomSchema);
export default Rooms;
