import { MongoRepository } from '../persistencia/mongo/main';
import { MySqlRepository } from '../persistencia/mysql/main';

export class DaoFactory {
  static get(tipo) {
    switch (tipo) {
      case 1:
        console.log('RETORNANDO INSTANCIA CLASE MONGODB');
        const Singleton = (function () {
          let instance;

          function createInstance() {
            const object = new MongoRepository();
            return object;
          }

          return {
            getInstance: function () {
              if (!instance) {
                console.log('Instancia Nula. Inicializandola');
                instance = createInstance();
              } else console.log('Instancia Ya Inicializada. Reutilizandola');

              return instance;
            },
          };
        })();
      case 2:
        console.log('RETORNANDO INSTANCIA MYSQL');
        const Singleton = (function () {
          let instance;

          function createInstance() {
            const object = new MySqlRepository();
            return object;
          }

          return {
            getInstance: function () {
              if (!instance) {
                console.log('Instancia Nula. Inicializandola');
                instance = createInstance();
              } else console.log('Instancia Ya Inicializada. Reutilizandola');

              return instance;
            },
          };
        })();
      default:
        return null;
    }
  }
}
