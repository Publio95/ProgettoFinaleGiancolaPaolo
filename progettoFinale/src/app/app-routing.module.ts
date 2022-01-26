import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { DettaglioClienteComponent } from './dettaglio-cliente/dettaglio-cliente.component';
import { EditPersoneComponent } from './edit-persone/edit-persone.component';
import { HomeComponent } from './home/home.component';
import { TabClientiComponent } from './tab-clienti/tab-clienti.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
