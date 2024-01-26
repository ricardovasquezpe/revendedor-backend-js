import { Mapper, createMap, forMember, ignore, mapFrom } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { CreateEventDto } from 'src/api/request/createEvent.dto';
import { EventDto } from 'src/api/response/event.dto';
import { Event } from 'src/repository/mongodb/schemas/event.schema';

export class EventProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, CreateEventDto, Event);
      createMap(mapper, Event, EventDto, forMember((dest) => dest._id, mapFrom((source) => String(source._id))),);
    };
  }
}
