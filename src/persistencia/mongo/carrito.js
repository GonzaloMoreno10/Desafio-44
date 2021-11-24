class CarritoRepository {
  async findAll(user) {
    let data = await this.carritoRepository.findAll({ user_id: user });
    return data;
  }
}

export const carritoRepository = new CarritoRepository();
