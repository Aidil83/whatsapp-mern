import mongoose from "mongoose";

export interface IChip extends mongoose.Document {
  id: string;
  name: string;
  image?: string;
  nameColor: string;
}

const ContactSchema = new mongoose.Schema<IChip>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: false },
  nameColor: { type: String, required: true },
});

const Chip = mongoose.model<IChip>("contact", ContactSchema);
export default Chip;
