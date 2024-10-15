import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('save-new-player')
  async saveNewPlayer(@Body() data: any) {
    const player_id = Number(data?.player_id?.toString());
    const money = Number(data?.money?.toString()) ?? 0;
    const nickname = data?.nickname?.toString();

    if (!player_id || !nickname) {
      throw new HttpException('Данные не получены', 400);
    }

    await this.userService.saveNewPlayer(player_id, money, nickname);
    return true;
  }

  @Get('all')
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
}
