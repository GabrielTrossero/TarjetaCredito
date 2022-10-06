import { Component, Input, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/Models/tarjeta.model';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TarjetaService } from 'src/app/servies/tarjeta.service';

@Component({
  selector: 'app-listar-tarjetas',
  templateUrl: './listar-tarjetas.component.html',
  styleUrls: ['./listar-tarjetas.component.css'],
})
export class ListarTarjetasComponent implements OnInit {
  //íconos
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  @Input() tarjetas: Tarjeta[];

  constructor(private tarjetaService: TarjetaService) {
    this.tarjetas = [];
  }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this.tarjetaService.getListTarjetas().subscribe(
      (data) => {
        this.tarjetas = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onDelete(id: number) {
    this.tarjetaService.deleteTarjeta(id).subscribe(
      (data) => {
        console.log('Tarjeta borrada correctamente');
        this.obtenerTarjetas(); //Tengo que actualizar la lista de tarjetas
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
