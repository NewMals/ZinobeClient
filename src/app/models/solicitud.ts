import { Estado } from './Estado.enum';
import { User } from './user';



export class Solicitud {
  Numero: number;
  Usuario: number;
  ValorSolicitado: number;
  FechaPagar: Date;
  EstadoCredito: Estado;
  PagoCredito: boolean;
}
