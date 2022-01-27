import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fatture } from '../classes/fatture/fatture';
import { Stato } from '../classes/fatture/stato';
import { IFatture } from '../interfaces/i-fatture';
import { IStatoFatture } from '../interfaces/i-stato-fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http: HttpClient) { }

  getAllFatture(){
    return this.http.get<IFatture>(environment.fatture)
  }
  
  getFatturaById(id: string){
    return this.http.get<Fatture>(environment.fattureDettaglio + id)

  }

  creaFattura(item: Fatture){
    return this.http.post<Fatture>(environment.fattureAdd, item)
  }
  
  modificaFatture(item: Fatture){
    return this.http.put<Fatture>(environment.fattureDettaglio + item.id, item)
  }
  
  eliminaFatture(id: number | undefined){
    return this.http.delete(environment.fattureDettaglio + id)
  }
  
  getTipiFatture(){
    return this.http.get<IStatoFatture>(environment.fattureByStato)
  }
  

}
