import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponeteComponent } from './componentes/primeiro-componete/primeiro-componete.component';
import { DadosPaiComponent } from './componentes/dados-pai/dados-pai.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponeteComponent,
    DadosPaiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
