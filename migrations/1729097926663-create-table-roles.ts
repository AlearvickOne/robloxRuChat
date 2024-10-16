import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableRoles1729097926663 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE roles (
        id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        title VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);

    await queryRunner.query(
      `INSERT INTO roles (title) VALUES ('Админ'), ('Игрок')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
