import { AutoMap } from '@automapper/classes';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Artist } from './artist.schema';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @AutoMap()
  _id: string;

  @AutoMap()
  @Prop()
  title: string;

  @AutoMap()
  @Prop()
  description: string;
  
  @AutoMap()
  @Prop({ type: SchemaTypes.ObjectId, ref: Artist.name })
  artistId: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
