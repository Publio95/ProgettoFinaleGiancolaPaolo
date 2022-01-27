import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti/clienti';
import { Fatture } from '../classes/fatture/fatture';
import { Stato } from '../classes/fatture/stato';
import { ClientiService } from '../services/clienti.service';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-add-fattura',
  templateUrl: './add-fattura.component.html',
  styleUrls: ['./add-fattura.component.css']
})
export class AddFatturaComponent implements OnInit {

  fattura: Fatture = new Fatture;
  clienti: Clienti []= []
  statoFattura: Stato [] = []

  constructor(private fattureService: FattureService, private router: Router, private clientiService: ClientiService) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(data2 => this.clienti = data2.content);
    this.fattureService.getTipiFatture().subscribe(data => this.statoFattura = data.content)
  }

addFattura(){

  
this.fattureService.creaFattura(this.fattura).subscribe(response =>{ this.fattura = response
console.log(this.fattura)})

this.router.navigate(['fatture'])
}


}
