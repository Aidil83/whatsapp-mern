import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  name: string;
  message: string;
  timestamp: string;
  received: boolean;
}

const whatsappSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: String },
  received: { type: Boolean, required: true },
});

// Collection
const Messages = mongoose.model<IUser>("messagecontents", whatsappSchema);
export default Messages;
