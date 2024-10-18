import { Injectable } from '@nestjs/common';
import { UsersEntity } from '../../database/entities/users.entity';
import { dataSource } from '../../database/database.provider';

@Injectable()
export class UserService {
  constructor() {}

  async saveNewPlayer(player_id: number, money: number, nickname: string) {
    const user = await UsersEntity.findOneBy({ player_id: player_id });

    if (user.nickname !== nickname) {
      user.nickname = nickname;
      await user.save();
    }

    if (user) {
      await this.saveStatusOnline(user.player_id, true);
      return await this.getPlayerMoney(user.player_id);
    }

    const newUserEntity = new UsersEntity();
    newUserEntity.player_id = player_id;
    newUserEntity.nickname = nickname;
    newUserEntity.money = money;
    newUserEntity.is_online = true;
    await newUserEntity.save();
    return 0;
  }

  async getAllPlayers() {
    return await UsersEntity.find();
  }

  async getPlayerMoney(player_id: number) {
    const user = await UsersEntity.findOneBy({ player_id: player_id });
    return user.money;
  }

  async getMoneyToPlayers() {
    const users = await UsersEntity.findBy({
      is_online: true,
    });

    for (const user of users) {
      user.money += 10;
      await user.save();
    }

    return users;
  }

  async saveStatusOnline(playerId: number, status: boolean) {
    return await UsersEntity.update(
      { player_id: playerId },
      { is_online: status },
    );
  }

  async getNicknameAndMoneyTenPlayers() {
    return await dataSource
      .getRepository(UsersEntity)
      .createQueryBuilder('users')
      .select(['nickname', 'money'])
      .orderBy('money', 'DESC')
      .limit(10)
      .getRawMany();
  }
}
