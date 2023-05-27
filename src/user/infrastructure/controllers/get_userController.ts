import { Request, Response } from "express";

import { GetUserByUserNameUseCase } from "../../application/getUser_userCase";
import { User } from "../../domain/user";

export class GetUserByUserNameController {
  constructor(readonly getUserByUserNameUseCase: GetUserByUserNameUseCase) {}

  async run(req: Request, res: Response) {
    const username = req.params.username;
    const user: User | null = await this.getUserByUserNameUseCase.run(username);
    console.log(user);
    if (!user) {
      return res.status(400).json({
        message: "No existe este usuario",
      });
    }
    console.log(user?.id);
    return res.status(200).json({
      message: "Usuario encontrado",
      data: {
        username: user?.username,
        password: user?.password,
      },
    });
  }
}
