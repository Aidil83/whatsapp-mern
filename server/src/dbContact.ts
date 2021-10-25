import mongoose from "mongoose";

export interface IContact extends mongoose.Document {
  name: string;
  image?: string;
  about?: string;
  email?: string;
  phone?: string;
}

const ContactSchema = new mongoose.Schema<IContact>({
  name: { type: String, required: true },
  image: { type: String, required: false },
  about: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
});

const Contact = mongoose.model<IContact>("contact", ContactSchema);
export default Contact;
