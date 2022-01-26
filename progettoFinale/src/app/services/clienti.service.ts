import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clienti } from '../classes/clienti/clienti';
import { IClienti } from '../interfaces/i-clienti';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

 // tenantID = 'fe_0621';
  //bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEzMywiZXhwIjoxNjQzOTA1MTMzfQ.Hpwx9rZXTEipxlIVRo8Fizqtta7utFR2AwIEP31gdONdQD8n2pAINeKvaB7cvUp5C1CEFzOal1FXJole4roeDg';
  //headers = new HttpHeaders();


  constructor(private http: HttpClient) { 
    //this.headers = this.headers
    //                          .set("Authorization", this.bearerToken)
    //                          .set("X-TENANT-ID", this.tenantID)
  }

  getAllClienti() {
   // return this.http.get(environment.clienti, {headers: this.headers})
    return this.http.get<IClienti>(environment.clienti)
  }

  getClientiById(id:string){
    return this.http.get<Clienti>(environment.clienteDettaglio + id)
  }

creaCliente(item: Clienti){
  return this.http.post<Clienti>(environment.clienteAdd, item)
}

modificaCliente(item: Clienti){
  return this.http.put<Clienti>(environment.clienteDettaglio + item.id, item)
}

eliminaCliente(id: number | undefined){
  return this.http.delete(environment.clienteDettaglio + id)
}

getTipiCliente(){
  return this.http.get<string[]>(environment.tipiCliente)
}



}
