import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Event, EventDocument } from './schemas/event.schema';
import { BaseRepository } from './base.repository';

@Injectable()
export class EventRepository extends BaseRepository<EventDocument> {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
  ) {
    super(eventModel);
  }

  async getEventById(id: string){
    return await this.eventModel.aggregate([
      { $match: { _id: new Types.ObjectId(id) } },
      {
        $lookup: {
            from: 'artists',
            localField: 'artistId',
            foreignField: '_id',
            as: 'artist'
        }
      },
      {
        $group: {
            _id: '$_id',
            title: { $first: '$title' },
            descrtiption: { $first: '$description' },
            artist: { $first: '$artist' },
        }
      },
      {
        $project: {
            _id: 1,
            title: 1,
            descrtiption: 1,
            artist: 1
        }
      }
    ])
  }
}
