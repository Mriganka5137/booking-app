import express, { Request, Response } from "express";
import { User } from "../models/user.model";
const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    user = new User(req.body);
    await user.save();

    return res.status(201).json({
      message: "User successfully registered",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});
