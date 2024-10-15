import { DataSource } from 'typeorm';
import { UsersEntity } from './entities/users.entity';

export const databaseProviders = [
  {
    provide: DataSource,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3902,
        username: 'root',
        password: 'A123456',
        database: 'roblox_ruchat',
        entities: [UsersEntity],
        synchronize: false,
      });

      return dataSource
        .initialize()
        .then(() => console.log('База данных успешно подключена'))
        .catch((e) => console.error(`Ошибка подключения к базе данных - ${e}`));
    },
  },
];
