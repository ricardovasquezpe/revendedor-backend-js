import { AutoMap } from '@automapper/classes';

export class EventDto {
  @AutoMap()
  readonly _id: string;
  @AutoMap()
  readonly title: string;
  @AutoMap()
  readonly description: string;
  @AutoMap()
  readonly artistId: string;
  @AutoMap()
  readonly artist: any
}
