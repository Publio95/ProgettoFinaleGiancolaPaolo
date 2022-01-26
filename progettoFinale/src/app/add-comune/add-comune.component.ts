import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comune } from '../classes/clienti/comune';
import { Provincia } from '../classes/clienti/provincia';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-add-comune',
  templateUrl: './add-comune.component.html',
  styleUrls: ['./add-comune.component.css']
})
export class AddComuneComponent implements OnInit {

comune: Comune = new Comune;
provincia: Provincia []= []

  constructor(private comuneService: ComuniService, private router: Router, private provinceService: ProvinceService) { }

  ngOnInit(): void {
    this.provinceService.getAllProvince().subscribe(data2 => this.provincia = data2.content );
  }

addComune(){
this.comuneService.creaComune(this.comune).subscribe(response =>{ this.comune = response
console.log(this.comune)})

this.router.navigate(['addClienti'])
}

}
