import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComuneComponent } from './add-comune/add-comune.component';
import { AddFatturaComponent } from './add-fattura/add-fattura.component';
import { AddNuovoComponent } from './add-nuovo/add-nuovo.component';
import { AddProvinciaComponent } from './add-provincia/add-provincia.component';
import { Detailfatture2Component } from './detailfatture2/detailfatture2.component';
import { DettaglioClienteComponent } from './dettaglio-cliente/dettaglio-cliente.component';
import { EditFattureComponent } from './edit-fatture/edit-fatture.component';
import { EditPersoneComponent } from './edit-persone/edit-persone.component';
import { HomeComponent } from './home/home.component';
import { TabClientiComponent } from './tab-clienti/tab-clienti.component';
import { TabFattureComponent } from './tab-fatture/tab-fatture.component';

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
    component: AddNuovoComponent
  },
  {
    path: "addProvincia",
    component: AddProvinciaComponent
  },
  {
    path: "addComune",
    component: AddComuneComponent
  },
  {
    path: "fatture",
    component: TabFattureComponent
  },
  {
    path: "addFatture",
    component: AddFatturaComponent
  },
  {
    path:"fatture/detail/:id",
    component: Detailfatture2Component
  },
  {
    path:"fattura/edit/:id",
    component: EditFattureComponent
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
