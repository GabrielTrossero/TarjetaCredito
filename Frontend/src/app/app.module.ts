import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgregarTarjetaComponent } from './TarjetaCredito/agregar-tarjeta/agregar-tarjeta.component';
import { ListarTarjetasComponent } from './TarjetaCredito/listar-tarjetas/listar-tarjetas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AgregarTarjetaComponent,
    ListarTarjetasComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
