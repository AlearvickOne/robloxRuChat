import { DataSource } from 'typeorm';

export const dataSourceGlobal = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3902,
  username: 'root',
  password: 'A123456',
  database: 'roblox_ruchat',
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: ['migrations/*'],
});
