import { createConnection } from '../../others/mysql';

export class UserDao {
  connection;

  constructor() {
    this.connection = createConnection();
  }

  async getUser(userId) {
    let usuario = await (
      await this.connection
    ).query(`select * from usuarios where id = ${userId}`);
    console.log(usuario[0]);
    if (usuario[0].length) return usuario[0];
  }

  async getUserByName(user) {
    let usuario = await (
      await this.connection
    ).query(`select * from usuarios where user = '${user}'`);
    if (usuario[0].length) return usuario[0];
  }
  async createUser(user) {
    user.firstLogin = true;
    let usuario = await (
      await this.connection
    ).query(
      `insert into usuarios (email,password,user,admin) values('${user.email}','${user.password}','${user.user}',1)`,
    );
    return usuario[0];
  }
  async updateUser(id, user) {
    console.log(user);
    console.log(id);
    let usuario = await (
      await this.connection
    )
      .query(`update usuarios set email = '${user.email}', password = '${user.password}'
         where _id = ${id}`);
    return usuario[0];
  }
}

export const userRepository = new UserDao();
