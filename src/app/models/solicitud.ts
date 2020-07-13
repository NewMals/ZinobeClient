import { Estado } from './Estado.enum';

export class Solicitud {
  Numero: number;
  Usuario: number;
  ValorSolicitado: number;
  EstadoCredito: Estado;
  PagoCredito: boolean;
}
