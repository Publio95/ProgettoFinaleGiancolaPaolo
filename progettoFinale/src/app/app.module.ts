import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { TabClientiComponent } from './tab-clienti/tab-clienti.component';
import { DettaglioClienteComponent } from './dettaglio-cliente/dettaglio-cliente.component';
import { EditPersoneComponent } from './edit-persone/edit-persone.component';
import { AddNuovoComponent } from './add-nuovo/add-nuovo.component';
import { AddProvinciaComponent } from './add-provincia/add-provincia.component';
import { AddComuneComponent } from './add-comune/add-comune.component';
import { TabFattureComponent } from './tab-fatture/tab-fatture.component';
import { AddFatturaComponent } from './add-fattura/add-fattura.component';
import { DetailFattureComponent } from './detail-fatture/detail-fatture.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TabClientiComponent,
    DettaglioClienteComponent,
    EditPersoneComponent,
    AddNuovoComponent,
    AddProvinciaComponent,
    AddComuneComponent,
    TabFattureComponent,
    AddFatturaComponent,
    DetailFattureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
