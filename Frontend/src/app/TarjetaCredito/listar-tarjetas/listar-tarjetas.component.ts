import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() deleteTarjeta: EventEmitter<number>;
  @Output() updateTarjeta: EventEmitter<Tarjeta>;

  constructor(private tarjetaService: TarjetaService) {
    this.tarjetas = [];
    this.deleteTarjeta = new EventEmitter();
    this.updateTarjeta = new EventEmitter();
  }

  ngOnInit(): void {}

  onUpdate(tarjeta: Tarjeta) {
    //this.updateTarjeta.emit(tarjeta);
    this.tarjetaService.tarjetaUpdate$.emit(tarjeta);
  }

  onDelete(id: number) {
    this.deleteTarjeta.emit(id);
  }
}
