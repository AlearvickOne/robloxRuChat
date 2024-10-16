import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  player_id: number;

  @Column()
  nickname: string;

  @Column()
  role: number;

  @Column()
  money: number;

  @Column()
  is_online: boolean;

  @Column()
  start_at?: string;
}
