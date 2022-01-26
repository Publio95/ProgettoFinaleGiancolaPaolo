import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/clienti/comune';
import { Provincia } from '../classes/clienti/provincia';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-add-provincia',
  templateUrl: './add-provincia.component.html',
  styleUrls: ['./add-provincia.component.css']
})
export class AddProvinciaComponent implements OnInit {

  provincia: Provincia = new Provincia;

  constructor(private provinceServer: ProvinceService, private router: Router,) { }

  ngOnInit(): void {
  }

  addProvincia(){

    this.provinceServer.creaProvincia(this.provincia).subscribe(response => console.log(response))

this.router.navigate(['addComune'])

    console.log(this.provincia)

  }

}
