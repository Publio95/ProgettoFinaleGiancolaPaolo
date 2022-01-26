import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { DettaglioClienteComponent } from './dettaglio-cliente/dettaglio-cliente.component';
import { DettaglioComuniComponent } from './dettaglio-comuni/dettaglio-comuni.component';
import { DettaglioProvinceComponent } from './dettaglio-province/dettaglio-province.component';
import { EditPersoneComponent } from './edit-persone/edit-persone.component';
import { HomeComponent } from './home/home.component';
import { TabClientiComponent } from './tab-clienti/tab-clienti.component';
import { TabComuniComponent } from './tab-comuni/tab-comuni.component';
import { TabProvinceComponent } from './tab-province/tab-province.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "clienti",
    component: TabClientiComponent
  },
  {
    path: "clienti/detail/:id",
    component: DettaglioClienteComponent
  },
  { path: "clienti/edit/:id",
  component: EditPersoneComponent

  },
  {
    path: "addClienti",
    component: AddClienteComponent
  },
  {
    path: "comuni",
    component: TabComuniComponent
  },
  {
    path: "comuni/detail/:id",
    component: DettaglioComuniComponent
  },
  {
    path: "province",
    component: TabProvinceComponent
  },
  {
    path: "province/detail/:id",
    component: DettaglioProvinceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
