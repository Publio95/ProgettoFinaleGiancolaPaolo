import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  tenantID = 'fe_0621';
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEzMywiZXhwIjoxNjQzOTA1MTMzfQ.Hpwx9rZXTEipxlIVRo8Fizqtta7utFR2AwIEP31gdONdQD8n2pAINeKvaB7cvUp5C1CEFzOal1FXJole4roeDg';


  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
   let myRequest: HttpRequest<any> = request;
   myRequest = request.clone(
     {headers: request.headers.set("Authorization", this.bearerToken)
                              .set("X-TENANT-ID", this.tenantID)}
   ) 
   
   
   
    return next.handle(myRequest); 
  }
}
