import { Document, Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

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

// Hash password before saving to database
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

export const User = model<UserInterface>("User", userSchema);
