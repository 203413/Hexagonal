import { UserRepository } from "../domain/user_repository";

export class GetUserByUserNameUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(username: string) {
    const user = await this.userRepository.getUser(username);
    return user;
  }
}
