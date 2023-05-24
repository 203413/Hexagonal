import { User } from "../domain/User";
import { UserRepository } from "../domain/user_repository";
import { pool } from "./postgres/connection";

export class PostgresUserRepository implements UserRepository {
  async createUser(user: User): Promise<User | null> {
    console.log(`Usuario ${user.username} creado.`);
    await pool.query(
      'INSERT INTO public."Users2" (username,password) VALUES ($1,$2)',
      [user.username, user.password]
    );
    return user;
  }
}
