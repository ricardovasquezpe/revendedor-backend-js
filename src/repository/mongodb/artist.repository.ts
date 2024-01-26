import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { Artist, ArtistDocument } from './schemas/artist.schema';

@Injectable()
export class ArtistRepository extends BaseRepository<ArtistDocument> {
  constructor(
    @InjectModel(Artist.name) private artistModel: Model<ArtistDocument>,
  ) {
    super(artistModel);
  }
}
