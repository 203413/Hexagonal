import { User } from "./user";

export interface UserRepository {
  createUser(user: User): Promise<User | null>;
  eliminateUser(user: User): Promise<User | null>;
}
