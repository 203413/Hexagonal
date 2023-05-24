import { Request, Response } from "express";

import { CreateUserUseCase } from "../../application/createUser_useCase";
import { User } from "../../domain/user";

export class RegisterUserController {
  constructor(readonly createUserUseCase: CreateUserUseCase) {}

  async run(req: Request, res: Response) {
    const user = req.body;
    const userCreated = await this.createUserUseCase.run(
      new User("1", user.username, user.password)
    );
    console.log(userCreated);
    return res.status(200).json({
      message: "Registrado",
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
      },
    });
  }
}
