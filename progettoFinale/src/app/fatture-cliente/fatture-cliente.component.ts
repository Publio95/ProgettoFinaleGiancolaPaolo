import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from '../classes/fatture/fatture';
import { ClientiService } from '../services/clienti.service';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

  fattura: Fatture[] =  []

  constructor(private http: ActivatedRoute, private fattureService: FattureService, router: Router, private clientiService: ClientiService) { }

  ngOnInit(): void {
    this.http.params.subscribe(data => {
      this.clientiService.getClientiById(data ['id']).subscribe(response => {
        console.log(response)
      this.fattureService.getAllFatture().subscribe( data => {
        this.fattura = data.content;
        this.fattura = this.fattura.filter(e => e.cliente.id !== response.id)
        console.log(this.fattura)



        //this.fattura.forEach(
        //  element => {element.cliente.id === response.id
        //  console.log(element.cliente.id)})

      })
      })
    })
  }


}
