import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-edit-persone',
  templateUrl: './edit-persone.component.html',
  styleUrls: ['./edit-persone.component.css']
})
export class EditPersoneComponent implements OnInit {

  cliente! : Clienti

  constructor(private http: ActivatedRoute, private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.http.params.subscribe(data => {
      this.clientiService.getClientiById(data['id']).subscribe(response => this.cliente = response)
    })

  }

  salva(){
    this.clientiService.modificaCliente(this.cliente).subscribe (response => console.log(response));
    this.router.navigate(['clienti'])
  }

}
