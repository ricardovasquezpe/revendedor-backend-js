import { AutoMap } from '@automapper/classes';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type ArtistDocument = Artist & Document;

@Schema()
export class Artist {
  @AutoMap()
  _id: string;

  @AutoMap()
  @Prop()
  name: string;
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);
