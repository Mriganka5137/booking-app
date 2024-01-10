import { Document, Schema, model } from "mongoose";

export interface UserInterface extends Document {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const userSchema = new Schema<UserInterface>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const User = model<UserInterface>("User", userSchema);
