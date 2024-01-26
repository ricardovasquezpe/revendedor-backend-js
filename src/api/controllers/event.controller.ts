import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventService } from 'src/service/event.service';
import { CreateEventDto } from '../request/createEvent.dto';

@Controller()
export class EventController {
  constructor(private eventS: EventService) {}

  @Get('/')
  public getAll() {
    return this.eventS.getEvents();
  }

  @Post('/')
  public create(@Body() dto: CreateEventDto) {
    return this.eventS.insertEvent(dto);
  }
}
