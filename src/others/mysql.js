import { createPool } from 'mysql2/promise';

export const createConnection = async () => {
  const connection = await createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ecommerce',
  });
  return connection;
};
