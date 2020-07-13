
import { Solicitud } from '../models/solicitud';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { SolicitudUsuario } from '../models/solicitud-usuario';
import { Estado } from '../models/Estado.enum';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private userService: UserService) { }


  Get(): Array<Solicitud>{
    let solicitudes: Array<Solicitud>;
    const local = localStorage.getItem('solicitudes');
    solicitudes = (local !== null) ? JSON.parse(local) as Array<Solicitud> : new Array<Solicitud>();
    return solicitudes;
  }

  Set(solicitud: Solicitud): void {
    let solicitudes: Array<Solicitud> = new Array<Solicitud>();
    solicitudes = this.Get();
    solicitud.Numero = (solicitudes.length > 0) ? solicitudes[solicitudes.length - 1].Numero + 1 : 1;
    solicitudes.push(solicitud);
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes));
  }

  GetSolicitudes(): Array<SolicitudUsuario> {
    let Isolicitudes: Array<SolicitudUsuario> = new Array<SolicitudUsuario>();
    const solicitudes = this.Get();
    solicitudes.forEach(solicitud => {
      let solicitudGeneral: SolicitudUsuario = new SolicitudUsuario();
      const user = this.userService.GetUser(solicitud.Usuario);
      solicitudGeneral.solicitud = solicitud;
      solicitudGeneral.usuario = user;
      Isolicitudes.push(solicitudGeneral);
    });
    return Isolicitudes;
  }

  GetSolicitudesXUsuario(idUser: number): Array<SolicitudUsuario> {
    return this.GetSolicitudes().filter(f => f.usuario.Id === idUser).sort();
  }

  GetSolicitudActualXUsuarios(idUser: number): SolicitudUsuario {
    const solicitudes = this.GetSolicitudesXUsuario(idUser);
    return  solicitudes[solicitudes.length - 1];
  }

  SetSoliciud(solicitud: Solicitud): void {
    let solicitudes: Array<Solicitud> = new Array<Solicitud>();
    solicitudes = this.Get();
    let findSolicitud = solicitudes.findIndex(i => i.Numero === solicitud.Numero);
    solicitudes.splice(findSolicitud, 1, solicitud);
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes));
  }

  GetMontoSolicitadoTotal(): number{
    const solitiudes = this.GetSolicitudes().filter(f => f.solicitud.EstadoCredito === Estado.Aprobada && !f.solicitud.PagoCredito);
    const montSolicitado = solitiudes.reduce((montoSolicitados, solicitud) => montoSolicitados + (+solicitud.solicitud.ValorSolicitado || 0), 0);
    return montSolicitado;
  }
}
