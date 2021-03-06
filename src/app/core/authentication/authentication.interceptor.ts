import { AuthenticationService } from '@app/core';
import { Observable } from 'rxjs/Observable';
import { Logger } from './../logger.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

const log = new Logger('AuthInterceptor');

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService) {
    }

    public intercept( req: HttpRequest<any>,
                      next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.authService.isAuthenticated) {
            log.debug(this.authService.isAuthenticated);
            return next.handle( req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.authService.getAccessToken())
            }));
        }

        return next.handle(req);
    }
}
