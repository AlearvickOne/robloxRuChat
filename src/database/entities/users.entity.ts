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
  money: number;

  @Column()
  start_at?: string;
}
