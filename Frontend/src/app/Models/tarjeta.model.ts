export class Tarjeta {
  titular: string;
  numTarjeta: number;
  mesAnio: string;
  CVV: number;

  constructor(pTitular = '', pNumTarjeta = 0, pMesAnio = '', pCVV = 0) {
    this.titular = pTitular;
    this.numTarjeta = pNumTarjeta;
    this.mesAnio = pMesAnio;
    this.CVV = pCVV;
  }
}
