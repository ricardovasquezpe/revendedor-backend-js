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

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }, { name: Artist.name, schema: ArtistSchema }]),
  ],
  providers: [EventProfile, EventRepository, EventService],
  exports: [EventService],
})
export class ServiceModule {}
