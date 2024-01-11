import cors from "cors";
import express, { Request, Response } from "express";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true, // allow cookies from client
    origin: process.env.FRONTEND_URL, // allow access from this origin
  })
);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from express endpoint" });
});
