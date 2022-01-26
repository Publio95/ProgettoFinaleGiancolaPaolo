import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comune } from '../classes/clienti/comune';
import { IComuni } from '../interfaces/i-comuni';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) { }

  getAllComuni(){
    return this.http.get<IComuni>(environment.comuni)
  }
  
  getComuneById(id: string){
    return this.http.get<Comune>(environment.comuniDettaglio + id)

  }

  creaComune(item: Comune){
    return this.http.post<Comune>(environment.comuneAdd, item)
  }
  

}


