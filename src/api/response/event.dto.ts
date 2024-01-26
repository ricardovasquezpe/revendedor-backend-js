import { AutoMap } from '@automapper/classes';

export class EventDto {
  @AutoMap()
  readonly title: string;
  @AutoMap()
  readonly description: string;
}
