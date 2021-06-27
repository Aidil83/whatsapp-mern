import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  message: string;
  name: string;
  timestamps: string;
  received: boolean;
}

const whatsappSchema = new mongoose.Schema<IUser>({
  message: { type: String, required: true },
  name: { type: String, required: true },
  timestamps: { type: String },
  received: { type: Boolean, required: true },
});

// Collection
const Messages = mongoose.model<IUser>("messagecontents", whatsappSchema);
export default Messages;
