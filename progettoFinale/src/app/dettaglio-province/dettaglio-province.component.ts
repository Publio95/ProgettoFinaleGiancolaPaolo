import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Provincia } from '../classes/clienti/provincia';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-dettaglio-province',
  templateUrl: './dettaglio-province.component.html',
  styleUrls: ['./dettaglio-province.component.css']
})
export class DettaglioProvinceComponent implements OnInit {

province: Provincia = new Provincia()

  constructor(private route:ActivatedRoute, private provinceService: ProvinceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.provinceService.getProvinceById(data['id']).subscribe(response => this.province = response)
    })
  }

}
