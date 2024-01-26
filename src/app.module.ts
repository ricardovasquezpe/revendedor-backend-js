import { Module } from '@nestjs/common';
import { BaseModule } from './api';
import { MongooseModule } from '@nestjs/mongoose';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ricardovasquezpe:1029384756@cluster0.2dye5f8.mongodb.net/?retryWrites=true&w=majority',
    ),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    BaseModule,
  ],
  providers: [],
})
export class AppModule {}
