import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti/clienti';
import { Fatture } from '../classes/fatture/fatture';
import { ClientiService } from '../services/clienti.service';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-dettaglio-cliente',
  templateUrl: './dettaglio-cliente.component.html',
  styleUrls: ['./dettaglio-cliente.component.css']
})
export class DettaglioClienteComponent implements OnInit {

  cliente: Clienti = new Clienti();
  fatture: Fatture [] = []

  constructor( private route: ActivatedRoute, private clientiService: ClientiService, private http: Router, private fattureService: FattureService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.clientiService.getClientiById(data ['id']).subscribe(response => {this.cliente = response
      this.fattureService.getFattureByClient(this.cliente).subscribe(data => this.fatture = data.content)})
    })
  }

modifica(cliente: Clienti) {
  this.http.navigate(['clienti/edit/', cliente.id])
}

dettaglioFatture(item: Clienti) {
  this.http.navigate(['fatture/detail/cliente', item.id])
}

}
