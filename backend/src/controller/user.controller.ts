import { Request, Response } from "express";
import { User } from "../models/user.model";

import jwt from "jsonwebtoken";
import { UserSchema } from "../utils/validation";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const validation = UserSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ message: validation.error.errors });
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    user = new User(req.body);
    await user.save();
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1d",
      }
    );
    return res
      .status(201)
      .cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24, // 1 day
      })
      .json({
        message: "User successfully registered",
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
