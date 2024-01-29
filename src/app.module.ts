import { Module } from '@nestjs/common';
import { BaseModule } from './api';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync(
      {
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          uri: configService.get<string>('MONGO_URL')
        })
      }
    ),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'rvdor_users',
        autoLoadEntities: true,
        synchronize: true
      })
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    BaseModule,
  ],
  providers: [],
})
export class AppModule {}
