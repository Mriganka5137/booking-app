import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes";

mongoose.connect(process.env.MONGODB_URI as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/users", userRoutes);

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from express endpoint" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
