import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from '../classes/fatture/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-detail-fatture',
  templateUrl: './detail-fatture.component.html',
  styleUrls: ['./detail-fatture.component.css']
})
export class DetailFattureComponent implements OnInit {

  fattura: Fatture = new Fatture

  constructor(private http: ActivatedRoute, private fattureService: FattureService, router: Router) { }

  ngOnInit(): void {
    this.http.params.subscribe(data => {
      this.fattureService.getFatturaById(data ['id']).subscribe(response => this.fattura = response)
    })
  }

}
