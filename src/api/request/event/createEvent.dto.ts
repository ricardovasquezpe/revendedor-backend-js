import { AutoMap } from '@automapper/classes';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateEventDto {
  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly title: string;
  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly description: string;
  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly artistId: string;
}
