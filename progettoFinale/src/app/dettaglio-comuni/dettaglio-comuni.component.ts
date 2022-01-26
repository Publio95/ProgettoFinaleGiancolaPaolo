import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comune } from '../classes/clienti/comune';
import { ComuniService } from '../services/comuni.service';

@Component({
  selector: 'app-dettaglio-comuni',
  templateUrl: './dettaglio-comuni.component.html',
  styleUrls: ['./dettaglio-comuni.component.css']
})
export class DettaglioComuniComponent implements OnInit {

comuni: Comune = new Comune();

  constructor(private route: ActivatedRoute, private comuniService: ComuniService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.comuniService.getComuneById(data['id']).subscribe(response => this.comuni = response)
    })
  }

}
