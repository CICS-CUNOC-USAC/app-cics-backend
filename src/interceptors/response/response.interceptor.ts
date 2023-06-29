import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(
    private readonly successMessage: string,
    private readonly errorMessage: string,
  ) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getResponse();

        const jsonResponse = {
          status: response.statusCode,
          message: this.successMessage,
          data: data,
        };

        return jsonResponse;
      }),
      catchError((error) => {
        const response = context.switchToHttp().getResponse();

        const jsonError = {
          status: response.statusCode,
          message: this.errorMessage,
          data: error,
        };

        return throwError(() => jsonError);
      }),
    );
  }
}
