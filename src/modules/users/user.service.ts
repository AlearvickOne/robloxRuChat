import { Injectable } from '@nestjs/common';
import { UsersEntity } from '../../database/entities/users.entity';

@Injectable()
export class UserService {
  constructor() {}

  async saveNewPlayer(
    player_id: number,
    money: number,
    nickname: string,
  ): Promise<void> {
    const user = await UsersEntity.findOneBy({ player_id: player_id });

    if (user) {
      return;
    }

    const newUserEntity = new UsersEntity();
    newUserEntity.player_id = player_id;
    newUserEntity.nickname = nickname;
    newUserEntity.money = money;
    await newUserEntity.save();
  }

  async getAllUsers() {
    return await UsersEntity.find();
  }
}
