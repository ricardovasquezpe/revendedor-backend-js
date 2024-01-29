import { AutoMap } from '@automapper/classes';
import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, MinLength, IsDate } from 'class-validator';

export class CreateUserDto {
  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly name: string;
  @AutoMap()
  @IsNotEmpty()
  //@Transform( ({ value }) => value && moment(value, "dd/mm/yyyy").toDate())
  @Transform( ({ value }) => value && new Date(value))
  @IsDate()
  readonly birthday: Date;
}
