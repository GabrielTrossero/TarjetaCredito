import { Component } from '@angular/core';
import { Tarjeta } from './Models/tarjeta.model';
import { TarjetaService } from './servies/tarjeta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrayTarjetas: Tarjeta[];

  constructor(private tarjetaService: TarjetaService) {
    this.arrayTarjetas = [];
  }

  ngOnInit() {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this.tarjetaService.getListTarjetas().subscribe(
      (data) => {
        this.arrayTarjetas = data;
        console.log(this.arrayTarjetas);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  nuevaTarjeta($event: Tarjeta) {
    this.tarjetaService.saveTarjeta($event).subscribe(
      (data) => {
        this.obtenerTarjetas(); //actualizo la lista de tarjetas
      },
      (error) => {
        console.log(error);
      }
    );
  }

  borrarTarjeta($event: number) {
    this.tarjetaService.deleteTarjeta($event).subscribe(
      (data) => {
        console.log('Tarjeta borrada correctamente');
        this.obtenerTarjetas(); //actualizo la lista de tarjetas
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
