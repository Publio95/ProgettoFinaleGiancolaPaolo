import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/clienti/comune';
import { ComuniService } from '../services/comuni.service';

@Component({
  selector: 'app-tab-comuni',
  templateUrl: './tab-comuni.component.html',
  styleUrls: ['./tab-comuni.component.css']
})
export class TabComuniComponent implements OnInit {

  comuni: Comune[] = []

  constructor(private comuniService: ComuniService, private router: Router) { }

  ngOnInit(): void {
    this.comuniService.getAllComuni().subscribe(data => this.comuni = data.content)
  }

  dettaglioComuni(item: Comune) {
    this.router.navigate(['comuni/detail/', item.id])
  }




}
