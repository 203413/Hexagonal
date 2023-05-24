import { User } from "../domain/user";
import { UserRepository } from "../domain/user_repository";
import { pool } from "./postgres/connection";

export class PostgresUserRepository implements UserRepository {
  async createUser(user: User): Promise<User | null> {
    console.log(`Usuario ${user.username} creado.`);
    await pool.query(
      'INSERT INTO public."users2" (username,password) VALUES ($1,$2)',
      [user.username, user.password]
    );
    return user;
  }
  async eliminateUser(user: User): Promise<User | null> {
    console.log(`Usuario ${user.username} eliminado.`);
    await pool.query("DELETE FROM users2 WHERE username = $1", [user.username]);
    return user;
  }
}
