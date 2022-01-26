import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IComuni } from '../interfaces/i-comuni';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) { }

  getAllComuni(){
    return this.http.get<IComuni>(environment.comuni)
  }
  


}


