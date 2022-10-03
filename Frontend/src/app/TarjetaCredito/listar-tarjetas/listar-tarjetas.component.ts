import { Component, Input, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/Models/tarjeta.model';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

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

  constructor() {
    this.tarjetas = [];
  }

  ngOnInit(): void {}

  onDelete(index: number) {
    this.tarjetas.splice(index, 1);
  }
}
