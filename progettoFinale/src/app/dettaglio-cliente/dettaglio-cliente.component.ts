import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-dettaglio-cliente',
  templateUrl: './dettaglio-cliente.component.html',
  styleUrls: ['./dettaglio-cliente.component.css']
})
export class DettaglioClienteComponent implements OnInit {

  cliente: Clienti = new Clienti();


  constructor( private route: ActivatedRoute, private clientiService: ClientiService, private http: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.clientiService.getClientiById(data ['id']).subscribe(response => this.cliente = response)
    })
  }

modifica(cliente: Clienti) {
  this.http.navigate(['clienti/edit/', cliente.id])
}

}
