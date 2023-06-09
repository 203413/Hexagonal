import { User } from "../domain/user";
import { UserRepository } from "../domain/user_repository";

export class CreateUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(user: User) {
    await this.userRepository.createUser(user);
  }
}
