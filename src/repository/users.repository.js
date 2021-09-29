import users from '../models/User';

class UsersRepository {
  async getUserByName(name) {
    let usuario = await users.find();
    for(let i in usuario){
        if(usuario[i].name === name){
            return usuario[i];
        }
    }
  }
  async createUser(user) {
    return await users.create(user)
  }
  async updateUser(id,user) {
    return await users.findByIdAndUpdate(id,user)
  }
}

export const usersRepository = new UsersRepository();