import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
