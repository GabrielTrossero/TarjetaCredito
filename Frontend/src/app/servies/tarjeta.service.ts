import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarjeta } from '../Models/tarjeta.model';

@Injectable({
  providedIn: 'root',
})
export class TarjetaService {
  private myAppUrl = 'https://localhost:44389/';
  private myApiUrl = 'api/tarjeta/';

  constructor(private httpClient: HttpClient) {}

  getListTarjetas(): Observable<any> {
    return this.httpClient.get(this.myAppUrl + this.myApiUrl);
  }

  deleteTarjeta(id: number): Observable<any> {
    return this.httpClient.delete(this.myAppUrl + this.myApiUrl + id);
  }

  saveTarjeta(tarjeta: Tarjeta): Observable<any> {
    return this.httpClient.post(this.myAppUrl + this.myApiUrl, tarjeta);
  }
}
