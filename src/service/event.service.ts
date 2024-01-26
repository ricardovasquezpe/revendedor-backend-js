import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateEventDto } from 'src/api/request/createEvent.dto';
import { EventDto } from 'src/api/response/event.dto';
import { EventRepository } from 'src/repository/event.repository';
import { Event } from 'src/repository/mongodb/schemas/event.schema';

@Injectable()
export class EventService {
  constructor(
    private readonly eventRepository: EventRepository,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}
  async getEvents(): Promise<any> {
    return this.classMapper.mapArray(
      await this.eventRepository.find(),
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
}
