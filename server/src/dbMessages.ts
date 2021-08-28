import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  roomName: string;
  name: string;
  message: string;
  created_at: number;
  updated_at: number;
  received: boolean;
}

const whatsappSchema = new mongoose.Schema<IUser>(
  {
    roomName: { type: String, required: false },
    name: { type: String, required: true },
    message: { type: String, required: true },
    received: { type: Boolean, required: true },
  },
  { timestamps: true }
);

// Collection
const Messages = mongoose.model<IUser>("messagecontents", whatsappSchema);
export default Messages;
