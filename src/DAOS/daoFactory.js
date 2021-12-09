import { MemoryRepository } from '../persistencia/memory/main';
import { MongoRepository } from '../persistencia/mongo/main';
import { MySqlRepository } from '../persistencia/mysql/main';

export class DaoFactory {
  static get(tipo) {
    switch (tipo) {
      case 1:
        console.log('Retornando Mongo');
        return new MongoRepository();
      case 2:
        console.log('Retornando MySql');
        return new MySqlRepository();
      case 3:
        console.log('Retornando Memory');
        return new MemoryRepository();
      default:
        return null;
    }
  }
}
