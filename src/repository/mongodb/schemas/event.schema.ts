import { AutoMap } from '@automapper/classes';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @AutoMap()
  @Prop()
  title: string;

  @AutoMap()
  @Prop()
  description: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
