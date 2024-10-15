import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1728899791314 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE users (
        id INT UNSIGNED UNIQUE PRIMARY KEY AUTO_INCREMENT NOT NULL,
        player_id VARCHAR(255) UNIQUE NOT NULL,
        nickname VARCHAR(255) NULL,
        money INT DEFAULT 0,
        start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
     `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
