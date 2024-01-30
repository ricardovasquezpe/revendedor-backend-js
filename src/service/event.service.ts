import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { CreateEventDto } from 'src/api/request/event/createEvent.dto';
import { UpdateEventDto } from 'src/api/request/event/updateEvent.dto';
import { EventDto } from 'src/api/response/event.dto';
import { EventRepository } from 'src/repository/mongodb/event.repository';
import { Event } from 'src/repository/mongodb/schemas/event.schema';

@Injectable()
export class EventService {
  constructor(
    private readonly eventRepository: EventRepository,
    @InjectMapper() private readonly classMapper: Mapper,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async getEvents(){
    var cachedData = await this.cacheManager.get('listEventsFindAll');
    if(cachedData){
      return cachedData;
    }

    var list = await this.eventRepository.find();
    await this.cacheManager.set('listEventsFindAll', list, 60000);
    return this.classMapper.mapArray(
      list,
      Event,
      EventDto,
    );
  }

  async insertEvent(dto: CreateEventDto): Promise<any> {
    const entity = this.classMapper.map(dto, CreateEventDto, Event);
    return this.classMapper.map(
      await this.eventRepository.create(entity),
      Event,
      EventDto,
    );
  }

  async getEventById(id: string): Promise<any>{
    var result = await this.eventRepository.getEventById(id)
    return (result.length > 0) ?  result[0] : null;
  }

  async updateEventById(id: string, payload: UpdateEventDto): Promise<any>{
    return this.classMapper.map(
      await this.eventRepository.updateById(id, payload),
      Event,
      EventDto
    );
  }

  async deleteEventById(id: string){
    return this.classMapper.map(
      await this.eventRepository.deleteById(id),
      Event,
      EventDto
    );
  }

  async searchEvents(params: any): Promise<any> {
    var skip = params.skip;
    var limit = params.limit;
    delete params.skip;
    delete params.limit;

    return {
      data: this.classMapper.mapArray(
        await this.eventRepository.searchWithPagination(params, skip, limit),
        Event,
        EventDto
      ),
      limit: limit,
      skip: skip
    }
  }
}