import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Tarjeta } from 'src/app/Models/tarjeta.model';
import { TarjetaService } from 'src/app/servies/tarjeta.service';

@Component({
  selector: 'app-agregar-tarjeta',
  templateUrl: './agregar-tarjeta.component.html',
  styleUrls: ['./agregar-tarjeta.component.css'],
})
export class AgregarTarjetaComponent implements OnInit {
  formulario: FormGroup;
  id: number | undefined;
  titulo: string;

  @Output() newTarjeta: EventEmitter<Tarjeta>;
  @Output() updateTarjeta = new EventEmitter<{
    tarjeta: Tarjeta;
    id: number | undefined;
  }>();

  constructor(private tarjetaService: TarjetaService) {
    this.newTarjeta = new EventEmitter();
    this.titulo = 'Agregar';

    this.formulario = new FormGroup({
      //id: new FormControl(),
      titular: new FormControl(),
      numeroTarjeta: new FormControl(),
      fechaExpiracion: new FormControl(),
      CVV: new FormControl(),
    });
  }

  ngOnInit(): void {
    //funcion que se ejecuta cuando presionamos editar desde el componente hermano
    this.tarjetaService.tarjetaUpdate$.subscribe((data) => {
      this.titulo = 'Actualizar';
      this.id = data.id;
      this.formulario.patchValue({
        titular: data.titular,
        numeroTarjeta: data.numeroTarjeta,
        fechaExpiracion: data.fechaExpiracion,
        CVV: data.cvv,
      });
    });
  }

  onSubmit() {
    this.updateTarjeta.emit({ tarjeta: this.formulario.value, id: this.id });
    this.titulo = 'Agregar';
    this.formulario.reset();
    this.id = undefined;
  }
}
