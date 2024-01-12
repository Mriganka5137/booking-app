import express from "express";
import {
  loginHandler,
  logoutHandler,
  validateTokenHandler,
} from "../controller/auth.controller";
import { verifyToken } from "../middleware/auth.middleware";

const authRouter = express.Router();

authRouter.post("/login", loginHandler);
authRouter.get("/validate-token", verifyToken, validateTokenHandler);
authRouter.post("/logout", logoutHandler);

export default authRouter;
