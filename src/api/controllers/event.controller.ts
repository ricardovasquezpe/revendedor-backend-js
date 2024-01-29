import { Body, Controller, Delete, Get, Param, Post, Put, Query, UnprocessableEntityException, UseGuards, UseInterceptors } from '@nestjs/common';
import { EventService } from 'src/service/event.service';
import { CreateEventDto } from '../request/event/createEvent.dto';
import { UpdateEventDto } from '../request/event/updateEvent.dto';
import { SearchEventQuery } from '../request/event/searchEvent.query';
import { AuthGuard } from 'src/utils/guards/auth.guard';
import { ExceptionInterceptor } from 'src/utils/interceptors/exception.interceptor';

@Controller("/event")
@UseGuards(AuthGuard)
@UseInterceptors(ExceptionInterceptor)
export class EventController {
  constructor(private eventService: EventService) {}

  @Get('/')
  public getAll() {
    return this.eventService.getEvents();
  }

  @Post('/')
  public create(@Body() dto: CreateEventDto) {
    return this.eventService.insertEvent(dto);
  }

  @Get('/findById/:id')
  public findById(@Param('id') id) {
    return this.eventService.getEventById(id);
  }

  @Get('/search')
  public search(@Query() params: SearchEventQuery) {
    return this.eventService.searchEvents(params);
  }

  @Put(':id')
  public updateById(@Param('id') id, @Body() dto: UpdateEventDto) {
    return this.eventService.updateEventById(id, dto);
  }

  @Delete(':id')
  public deleteById(@Param('id') id) {
    return this.eventService.deleteEventById(id);
  }
}
