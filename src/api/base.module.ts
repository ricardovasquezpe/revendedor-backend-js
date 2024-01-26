import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as controllers from './controllers';
import { ServiceModule } from 'src/service/service.module';
import { LoggerMiddleware } from 'src/utils/middlewares/logger.middleware';

@Module({
  imports: [ServiceModule],
  providers: [],
  controllers: Object.values(controllers),
})

export class BaseModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
