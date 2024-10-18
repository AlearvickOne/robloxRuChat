import { DataSource } from 'typeorm';
import { UsersEntity } from './entities/users.entity';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3902,
  username: 'root',
  password: 'A123456',
  database: 'roblox_ruchat',
  entities: [UsersEntity],
  synchronize: false,
});

export const DatabaseProviders = [
  {
    provide: DataSource,
    useFactory: async () => {
      return dataSource
        .initialize()
        .then(() => console.log('База данных успешно подключена'))
        .catch((e) => console.error(`Ошибка подключения к базе данных - ${e}`));
    },
  },
];
