import { Model } from 'mongoose';
import { Event } from './mongodb/schemas/event.schema';

export class BaseRepository<T> {
  constructor(private repository: Model<T>) {}

  async create(payload: Event): Promise<T> {
    return await this.repository.create(payload);
  }

  async find(): Promise<T[]> {
    return await this.repository.find();
  }
}
