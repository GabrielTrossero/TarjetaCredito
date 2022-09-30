import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Tarjeta } from 'src/app/Models/tarjeta.model';

@Component({
  selector: 'app-agregar-tarjeta',
  templateUrl: './agregar-tarjeta.component.html',
  styleUrls: ['./agregar-tarjeta.component.css'],
})
export class AgregarTarjetaComponent implements OnInit {
  formulario: FormGroup;

  @Output() newTarjeta: EventEmitter<Tarjeta>;

  constructor() {
    this.newTarjeta = new EventEmitter();
    this.formulario = new FormGroup({
      titular: new FormControl(),
      numTarjeta: new FormControl(),
      mesAnio: new FormControl(),
      CVV: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.newTarjeta.emit(this.formulario.value);
  }
}
