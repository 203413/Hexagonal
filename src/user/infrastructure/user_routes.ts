import express from "express";

import {
  eliminateUserController,
  getUserByUserNameController,
  registerUserController,
} from "./dependecies";

export const userRouter = express.Router();

userRouter.post(
  "/create",
  registerUserController.run.bind(registerUserController)
);

userRouter.post(
  "/eliminate",
  eliminateUserController.run.bind(eliminateUserController)
);

userRouter.get(
  "/getbyname/:username",
  getUserByUserNameController.run.bind(getUserByUserNameController)
);
