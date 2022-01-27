import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fatture } from '../classes/fatture/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-tab-fatture',
  templateUrl: './tab-fatture.component.html',
  styleUrls: ['./tab-fatture.component.css']
})
export class TabFattureComponent implements OnInit {

  fatture: Fatture[]=[]

  constructor(private fattureServices: FattureService,  private router: Router) { }

  ngOnInit(): void {
    this.fattureServices.getAllFatture().subscribe(data => this.fatture = data.content)
  }

  elimina(item: Fatture){

  }

dettaglioFattura(item: Fatture){
  this.router.navigate(['fatture/detail/', item.id])

}

}
