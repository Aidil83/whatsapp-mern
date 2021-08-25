import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  roomName: string;
  name: string;
  message: string;
  timestamp: string;
  received: boolean;
}

const whatsappSchema = new mongoose.Schema<IUser>({
  roomName: { type: String, required: false },
  name: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: String },
  received: { type: Boolean, required: true },
});

// Collection
const Messages = mongoose.model<IUser>("messagecontents", whatsappSchema);
export default Messages;
