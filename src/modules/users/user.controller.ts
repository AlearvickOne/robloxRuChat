import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('save-new-player')
  async saveNewPlayer(@Body() data: any, @Res() res: Response) {
    const player_id = Number(data?.player_id?.toString());
    const money = Number(data?.money?.toString()) ?? 0;
    const nickname = data?.nickname?.toString();

    if (!player_id || !nickname) {
      throw new HttpException('Данные не получены', 400);
    }

    const moneyPlayer = await this.userService.saveNewPlayer(
      player_id,
      money,
      nickname,
    );
    return res.json(moneyPlayer);
  }

  @Get('get-player-money')
  async getPlayerMoney(@Req() req: Request, @Res() res: Response) {
    const player_id = Number(req?.query?.player_id?.toString());

    if (!player_id) {
      throw new HttpException('player_id не получен', 400);
    }

    const money = await this.userService.getPlayerMoney(player_id);
    return res.json(money);
  }

  @Get('all')
  async getAllUsers(@Res() res: Response) {
    const users = await this.userService.getAllPlayers();
    return res.json(users);
  }

  @Post('save-status-online')
  async saveStatusOnline(@Body() data: any, @Res() res: Response) {
    const playerId = Number(data?.player_id?.toString());
    const status = data?.status;

    if (!playerId) {
      throw new HttpException('Данные по онлайну не получены', 400);
    }

    await this.userService.saveStatusOnline(playerId, status);
    return res.json(true);
  }

  @Get('add-money-to-players')
  async getMoneyToPlayers(@Res() res: Response) {
    const money = await this.userService.getMoneyToPlayers();
    return res.json(money);
  }
}
