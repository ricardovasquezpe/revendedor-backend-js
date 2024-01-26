import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Event,
  EventSchema,
} from 'src/repository/mongodb/schemas/event.schema';
import { EventRepository } from 'src/repository/event.repository';
import { EventProfile } from 'src/profiles/event.profile';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
  ],
  providers: [EventProfile, EventRepository, EventService],
  exports: [EventService],
})
export class ServiceModule {}
