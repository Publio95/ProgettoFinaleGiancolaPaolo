import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from '../classes/clienti/provincia';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-tab-province',
  templateUrl: './tab-province.component.html',
  styleUrls: ['./tab-province.component.css']
})
export class TabProvinceComponent implements OnInit {

  
  province: Provincia[] = []

  constructor(private provinceService: ProvinceService, private router: Router) { }

  ngOnInit(): void {
    this.provinceService.getAllProvince().subscribe(data => this.province = data.content)
  }

  dettaglioProvince(item: Provincia) {
    this.router.navigate(['provincia/detail/', item.id])
  }

}
