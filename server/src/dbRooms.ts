import mongoose from "mongoose";

export interface IRoom extends mongoose.Document {
  roomName: string;
  image?: string;
  members: [{ id: number; name: string; image: string; nameColor: string }];
}

// Schema
const RoomSchema = new mongoose.Schema<IRoom>({
  roomName: { type: String, required: true },
  image: { type: String, required: false },
  members: [{ id: Number, name: String, image: String, nameColor: String }],
});

// Collection
const Rooms = mongoose.model<IRoom>("roomcontents", RoomSchema);
export default Rooms;
