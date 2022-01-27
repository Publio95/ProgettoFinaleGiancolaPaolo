import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from '../classes/fatture/fatture';
import { Stato } from '../classes/fatture/stato';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-edit-fatture',
  templateUrl: './edit-fatture.component.html',
  styleUrls: ['./edit-fatture.component.css']
})
export class EditFattureComponent implements OnInit {

  fatture! : Fatture
  statoFattura: Stato [] = []
  constructor(private http: ActivatedRoute, private fattureService: FattureService, private router:Router) { }

  ngOnInit(): void {
    this.http.params.subscribe(data => {
      this.fattureService.getFatturaById(data['id']).subscribe(response => this.fatture = response)
      this.fattureService.getTipiFatture().subscribe(data => this.statoFattura = data.content)

    })

  }

  salva(){
    this.fattureService.modificaFatture(this.fatture).subscribe (response => console.log(response));
    this.router.navigate(['fatture'])
  }


}
