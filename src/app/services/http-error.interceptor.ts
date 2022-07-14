import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from './error.service';

// para manejar errores y que aparezcan de forma amigable en la pantalla

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor( private errorService: ErrorService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError( error => {
        let errorMessage = "";
        if (error instanceof ErrorEvent) {
          //client-side error
          errorMessage = `Client-side error: ${error.error.message}`;
        }  else {
          //backend error
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
        }  

        this.errorService.show(errorMessage);
        return throwError(() => error);      
      } )
    )
  }
}
