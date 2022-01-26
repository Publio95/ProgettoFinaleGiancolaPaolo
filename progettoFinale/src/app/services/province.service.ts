import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Provincia } from '../classes/clienti/provincia';
import { IProvince } from '../interfaces/i-province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http: HttpClient) { }

  getAllProvince(){
    return this.http.get<IProvince>(environment.province)
  }
  
  getProvinceById(id: string){
    return this.http.get<Provincia>(environment.provinceDettaglio + id)

  }
}
