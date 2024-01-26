import { Module } from '@nestjs/common';
import * as controllers from './controllers';
import { ServiceModule } from 'src/service/service.module';

@Module({
  imports: [ServiceModule],
  providers: [],
  controllers: Object.values(controllers),
})
export class BaseModule {}
