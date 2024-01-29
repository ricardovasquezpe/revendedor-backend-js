import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Event,
  EventSchema,
} from 'src/repository/mongodb/schemas/event.schema';
import { EventRepository } from 'src/repository/mongodb/event.repository';
import { EventProfile } from 'src/utils/profiles/event.profile';
import { Artist, ArtistSchema } from 'src/repository/mongodb/schemas/artist.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntitiy } from 'src/repository/mysql/entity/user.entity';
import { UserService } from './user.service';
import { UserRepository } from 'src/repository/mysql/user.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }, { name: Artist.name, schema: ArtistSchema }]),
    TypeOrmModule.forFeature([UserEntitiy])
  ],
  providers: [EventProfile, EventRepository, UserRepository, EventService, UserService],
  exports: [EventService, UserService],
})
export class ServiceModule {}
