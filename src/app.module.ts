import { Module } from '@nestjs/common';
import { BaseModule } from './api';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntitiy } from './repository/mysql/entity/user.entity';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ricardovasquezpe:1029384756@cluster0.2dye5f8.mongodb.net/?retryWrites=true&w=majority',
    ),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'rvdor_users',
      autoLoadEntities: true,
      synchronize: true
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    BaseModule,
  ],
  providers: [],
})
export class AppModule {}
