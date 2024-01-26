import { Model } from 'mongoose';

export class BaseRepository<T> {
  constructor(private repository: Model<T>) {}

  async create(payload: any): Promise<T> {
    return await this.repository.create(payload);
  }

  async find(): Promise<T[]> {
    return await this.repository.find();
  }

  async findById(id: any): Promise<T> {
    return await this.repository.findById(id);
  }

  async updateById(id: any, payload: any): Promise<T>{
    return await this.repository.findByIdAndUpdate(id, payload, {new: true});
  }

  async deleteById(id: any): Promise<T>{
    return await this.repository.findByIdAndDelete(id);
  }
}
