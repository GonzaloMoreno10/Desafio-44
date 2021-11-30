import users from '../../services/users';

class UserDao {
  async getUser(user) {
    let usuario = await users.findOne({ user: user });
    if (usuario) return usuario;
  }

  async getUserByName(name) {
    let usuario = await users.find({ name: name });
    if (usuario) return usuario;
  }
  async createUser(user) {
    user.firstLogin = true;
    await users.create(user);
  }
  async updateUser(id, user) {
    return await users.findByIdAndUpdate(id, user);
  }
}

export const userDao = new UserDao();
