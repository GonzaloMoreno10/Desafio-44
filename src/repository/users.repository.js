import users from '../models/User';


class UsersRepository {

  async getUser(user){
    console.log(user)
    let usuario = await users.findOne({user:user})
    if(usuario) return usuario;
  }


  async getUserByName(name) {
    let usuario = await users.find({name:name});
    if(usuario) return usuario;
  }
  async createUser(user) {
    user.firstLogin = true;
    await users.create(user)
  }
  async updateUser(id,user) {
    return await users.findByIdAndUpdate(id,user)
  }
}

export const usersRepository = new UsersRepository();