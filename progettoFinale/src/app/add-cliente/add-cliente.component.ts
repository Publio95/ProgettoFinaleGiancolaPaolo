import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti/clienti';
import { Comune } from '../classes/clienti/comune';
import { IndirizzoSedeLegale } from '../classes/clienti/indirizzo-sede-legale';
import { IndirizzoSedeOperativa } from '../classes/clienti/indirizzo-sede-operativa';
import { ClientiService } from '../services/clienti.service';
import { ComuniService } from '../services/comuni.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  cliente: Clienti = new Clienti()
  tipoCliente: string[] = []
  comune: Comune[] = []
  nomeComune: string [] = []

  constructor(private clienteService: ClientiService, private router: Router, private comuniService: ComuniService) { }

  ngOnInit(): void {
    this.clienteService.getTipiCliente().subscribe(data => this.tipoCliente = data);
    this.comuniService.getAllComuni().subscribe(data2 => this.comune = data2.content );
  }

aggiungi(){

this.cliente.dataInserimento = "2019-06-01T08:11:01.911+00:00";
this.cliente.dataUltimoContatto = "2021-03-24T21:32:06.375+00:00";
//this.cliente.indirizzoSedeLegale = new IndirizzoSedeLegale();
//this.cliente.indirizzoSedeOperativa = new IndirizzoSedeOperativa();

console.log(this.cliente)
  this.clienteService.creaCliente(this.cliente).subscribe(response => this.cliente = response)
  this.router.navigate(['clienti'])
}


}
