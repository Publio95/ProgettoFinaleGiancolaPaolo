import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti/clienti';
import { Comune } from '../classes/clienti/comune';
import { ClientiService } from '../services/clienti.service';
import { ComuniService } from '../services/comuni.service';

@Component({
  selector: 'app-add-nuovo',
  templateUrl: './add-nuovo.component.html',
  styleUrls: ['./add-nuovo.component.css']
})
export class AddNuovoComponent implements OnInit {

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
  //console.log(this.cliente.indirizzoSedeLegale.comune)
//this.cliente.indirizzoSedeLegale = new IndirizzoSedeLegale();
//this.cliente.indirizzoSedeOperativa = new IndirizzoSedeOperativa();

  this.clienteService.creaCliente(this.cliente).subscribe(response => this.cliente = response)
 
 
  this.router.navigate(['clienti'])
}

}
