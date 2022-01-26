import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-tab-clienti',
  templateUrl: './tab-clienti.component.html',
  styleUrls: ['./tab-clienti.component.css']
})
export class TabClientiComponent implements OnInit {

  clienti : Clienti [ ] = []

  constructor(private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {

    this.clientiService.getAllClienti().subscribe(data => this.clienti = data.content)
  }

  dettaglioCliente(item: Clienti){
    this.router.navigate(['clienti/detail/', item.id])
  }
elimina(item: Clienti){
  this.clientiService.eliminaCliente(item.id).subscribe(data => {
    console.log(data)
  })
}

}
