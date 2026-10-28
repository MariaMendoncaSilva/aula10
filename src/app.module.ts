
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { especie } from './clinica.ts/especie.entity.js';
import { OrigemEspecie } from './clinica.ts/origem.entity.js';
import { Pet } from './clinica.ts/pet.entity.js';
import { Raca } from './clinica.ts/raca.entity.js';
import { Tutor } from './clinica.ts/tutor.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'escola_db3',
      entities: [especie, OrigemEspecie, Pet, Raca, Tutor],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
