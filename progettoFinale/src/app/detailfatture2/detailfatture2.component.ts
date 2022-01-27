import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fatture } from '../classes/fatture/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-detailfatture2',
  templateUrl: './detailfatture2.component.html',
  styleUrls: ['./detailfatture2.component.css']
})
export class Detailfatture2Component implements OnInit {
  fattura: Fatture = new Fatture();

  constructor(private fattureService: FattureService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.fattureService.getFatturaById(data['id']).subscribe(response => this.fattura = response)
      });
    }
}
