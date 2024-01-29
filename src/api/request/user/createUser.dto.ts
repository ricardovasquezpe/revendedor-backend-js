import { AutoMap } from '@automapper/classes';
import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, MinLength, IsDate, Validate } from 'class-validator';

export class CreateUserDto {
  @AutoMap()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly name: string;
  @AutoMap()
  @IsNotEmpty()
  //@Validate(ValidateDate)
  @Transform( ({ value }) => value && new Date(value))
  @IsDate()
  readonly birthday: Date;
}
