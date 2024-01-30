import { Module } from '@nestjs/common';
import { BaseModule } from './api';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisOptions } from './config/redisOptions';
import { MongoOptions } from './config/mongoOptions';
import { TypeOrmOptions } from './config/typeOrmOptions';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.registerAsync(RedisOptions),
    MongooseModule.forRootAsync(MongoOptions),
    TypeOrmModule.forRootAsync(TypeOrmOptions),
    AutomapperModule.forRoot({ strategyInitializer: classes()}),
    BaseModule,
  ],
  providers: [],
})
export class AppModule {}
