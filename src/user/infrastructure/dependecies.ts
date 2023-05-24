import { CreateUserUseCase } from "../application/createUser_useCase";
import { EliminateUserUseCase } from "../application/eliminateUser_useCase";
import { RegisterUserController } from "./controllers/create_userController";
import { EliminateUserController } from "./controllers/eliminate_userController";
import { PostgresUserRepository } from "./db_userRepository";

export const mySqlUserRepository = new PostgresUserRepository();
export const createUserUseCase = new CreateUserUseCase(mySqlUserRepository);
export const registerUserController = new RegisterUserController(
  createUserUseCase
);
export const eliminateUserUseCase = new EliminateUserUseCase(
  mySqlUserRepository
);
export const eliminateUserController = new EliminateUserController(
  eliminateUserUseCase
);
