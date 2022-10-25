export class Tarjeta {
  id: number;
  titular: string;
  numeroTarjeta: string;
  fechaExpiracion: string;
  cvv: string;

  constructor(pTitular = '', pNumTarjeta = '', pMesAnio = '', pCVV = '') {
    this.id = 0;
    this.titular = pTitular;
    this.numeroTarjeta = pNumTarjeta;
    this.fechaExpiracion = pMesAnio;
    this.cvv = pCVV;
  }
}
