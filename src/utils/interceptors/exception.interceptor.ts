import {
    BadRequestException,
    CallHandler,
    ExecutionContext,
    HttpException,
    HttpStatus,
    NestInterceptor,
} from '@nestjs/common';
import { catchError, throwError } from 'rxjs';

export class ExceptionInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler): any {
        return handler
            .handle()
            .pipe(catchError((err) => throwError(() => this.errorHandler(err, context))));
    }

    errorHandler(exception: HttpException, context: ExecutionContext) {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
    
        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    
        response.status(status).json({
          path: request.url,
          message: exception.message,
          result: exception,
        });
    }
}