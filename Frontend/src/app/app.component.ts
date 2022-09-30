import { Component } from '@angular/core';
import { Tarjeta } from './Models/tarjeta.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrayTarjetas: Tarjeta[];

  constructor() {
    this.arrayTarjetas = [];
  }

  onNewTarjeta($event: Tarjeta) {
    this.arrayTarjetas.push($event);
    console.log(this.arrayTarjetas);
  }
}
