import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './mongodb/schemas/event.schema';
import { BaseRepository } from './base.repository';

@Injectable()
export class EventRepository extends BaseRepository<EventDocument> {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
  ) {
    super(eventModel);
  }
}
