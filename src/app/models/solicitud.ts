import { Estado } from './Estado.enum';

export class Solicitud {
  Numero: number;
  Usuario: number;
  ValorSolicitado: number;
  FechaPagar: Date;
  EstadoCredito: Estado;
  PagoCredito: boolean;
}
