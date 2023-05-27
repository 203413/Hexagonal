import { Request, Response } from "express";

import { EliminateUserUseCase } from "../../application/eliminateUser_useCase";
import { User } from "../../domain/user";

export class EliminateUserController {
  constructor(readonly eliminateUserUseCase: EliminateUserUseCase) {}

  async run(req: Request, res: Response) {
    const user = req.body;
    const userEliminated = await this.eliminateUserUseCase.run(
      new User("1", user.username, "")
    );
    console.log(userEliminated);
    return res.status(204).json({
      message: "Eliminado",
    });
  }
}
