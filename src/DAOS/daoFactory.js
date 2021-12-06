import { MemoryRepository } from '../persistencia/memory/main';
import { MongoRepository } from '../persistencia/mongo/main';
import { MySqlRepository } from '../persistencia/mysql/main';

export class DaoFactory {
  static get(tipo) {
    switch (tipo) {
      case 1:
        return new MongoRepository();
      case 2:
        return new MySqlRepository();
      case 3:
        return new MemoryRepository();
      default:
        return null;
    }
  }
}
