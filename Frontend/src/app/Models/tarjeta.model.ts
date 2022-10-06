export class Tarjeta {
  titular: string;
  numeroTarjeta: number;
  fechaExpiracion: string;
  CVV: number;

  constructor(pTitular = '', pNumTarjeta = 0, pMesAnio = '', pCVV = 0) {
    this.titular = pTitular;
    this.numeroTarjeta = pNumTarjeta;
    this.fechaExpiracion = pMesAnio;
    this.CVV = pCVV;
  }
}
