class UserDao {
  users = [];

  constructor() {
    this.users = [
      { id: 1, user: 'carlos', password: 'carlos', email: 'carlos@gmail.com' },
    ];
  }

  async getUser(user) {
    for (let i in this.users) {
      if (this.users[i].id == user) {
        return user[i];
      }
    }
  }

  async getUserByName(name) {
    for (let i in this.users) {
      if (this.users[i].user == name) {
        return user[i];
      }
    }
  }
  async createUser(user) {
    return this.users.push(user);
  }
  async updateUser(id, user) {
    for (let i in this.users) {
      if (this.users[i].id == id) {
        this.users[i] == user;
        return this.users[i];
      }
    }
  }
}

export const userDao = new UserDao();
