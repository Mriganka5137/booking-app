import express from "express";
import {
  loginHandler,
  validateTokenHandler,
} from "../controller/auth.controller";
import { verifyToken } from "../middleware/auth.middleware";

const authRouter = express.Router();

authRouter.post("/login", loginHandler);
authRouter.get("/validate-token", verifyToken, validateTokenHandler);

export default authRouter;
