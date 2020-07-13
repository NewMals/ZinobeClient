import { environment } from '../../../environments/environment';
import { Estado } from '../../models/Estado.enum';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SolicitudService } from '../../services/solicitud.service ';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudUsuario } from 'src/app/models/solicitud-usuario';
import { CapitalBaseService } from 'src/app/services/capital-base.service';

@Component({
  selector: 'app-nueva-solicitud',
  templateUrl: './nueva-solicitud.component.html',
  styleUrls: ['./nueva-solicitud.component.css'],
})
export class NuevaSolicitudComponent implements OnInit {
  solicitudUsuario: SolicitudUsuario;
  usuarioNoExistente: boolean;
  mensajeError: string;
  limpiarControles: boolean;

  constructor(
    private solicitudService: SolicitudService,
    private userService: UserService,
    private router: Router,
    private montoCapital: CapitalBaseService
  ) {
    const state = this.router.getCurrentNavigation().extras.state;
    this.inicializar(state);
  }

  ngOnInit(): void {}
  Regresar(): void {
    this.router.navigate(['/solicitudes']);
  }

  Limpiar(): void {
    this.solicitudUsuario = new SolicitudUsuario();
    this.solicitudUsuario.usuario = new User();
    this.solicitudUsuario.solicitud = new Solicitud();
    this.usuarioNoExistente = true;
    this.limpiarControles = false;
    this.mensajeError = undefined;
  }

  inicializar(state: any): void {
    if (state) {
      this.solicitudUsuario = state as SolicitudUsuario;
      this.solicitudUsuario.solicitud.ValorSolicitado = undefined;
      this.usuarioNoExistente = false;
    } else {
      this.Limpiar();
    }
    if (environment.ValorMInimoAPrestar > this.montoCapital.Get()) {
      this.limpiarControles = true;
    } else {
      this.limpiarControles = false;
    }
  }

  GetValorSolicitado(valor: number): void {
    this.solicitudUsuario.solicitud.ValorSolicitado = valor;
  }

  GetUser(user: User): void {
    this.solicitudUsuario.usuario = user;
  }

  CrearSolicitud(): void {
    if (this.Validacion()) {
      if (this.solicitudUsuario.usuario.Id === undefined) {
        const idUser = this.userService.Set(this.solicitudUsuario.usuario);
        this.solicitudUsuario.solicitud.Usuario = idUser;
        this.solicitudUsuario.solicitud.EstadoCredito =
          Math.random() * 10 > 5 ? Estado.Aprobada : Estado.Rechazada;
      } else {
        this.solicitudUsuario.solicitud.Usuario = this.solicitudUsuario.usuario.Id;
        this.solicitudUsuario.solicitud.EstadoCredito = Estado.Aprobada;
      }
      this.solicitudUsuario.solicitud.PagoCredito = false;
      this.solicitudService.Set(this.solicitudUsuario.solicitud);
      if (this.solicitudUsuario.solicitud.EstadoCredito === Estado.Aprobada) {
        this.montoCapital.Set(
          this.montoCapital.Get() -
            this.solicitudUsuario.solicitud.ValorSolicitado
        );
      }
      this.router.navigate(['/solicitudes']);
    }
  }

  Validacion(): boolean {
    if (
      this.solicitudUsuario.usuario.Cedula === '' ||
      this.solicitudUsuario.usuario.Cedula === undefined
    ) {
      this.usuarioNoExistente = true;
      this.mensajeError = 'Por favor ingrese una Cedula';
      return false;
    }
    if (
      this.solicitudUsuario.usuario.Nombre === '' ||
      this.solicitudUsuario.usuario.Nombre === undefined
    ) {
      this.usuarioNoExistente = true;
      this.mensajeError = 'Por favor ingrese un Nombre';
      return false;
    }
    if (
      this.solicitudUsuario.solicitud.ValorSolicitado <
        environment.ValorMInimoAPrestar ||
      this.solicitudUsuario.solicitud.ValorSolicitado >
        this.montoCapital.Get() ||
      this.solicitudUsuario.solicitud.ValorSolicitado === undefined
    ) {
      this.usuarioNoExistente = true;
      this.mensajeError =
        'Por favor ingrese un monto valido, recuerde que debe esar entre el rango solicitado';
      return false;
    }
    if (this.solicitudUsuario.usuario.Id !== undefined) {
      const solicitud = this.solicitudService.GetSolicitudActualXUsuarios(
        this.solicitudUsuario.usuario.Id
      );
      if (
        solicitud.solicitud.EstadoCredito === Estado.Aprobada &&
        !solicitud.solicitud.PagoCredito
      ) {
        this.mensajeError =
        `El usuario tiene la solicitud "${solicitud.solicitud.Numero}" pendiente`;
        this.limpiarControles = true;
        return false;
      }
      if (solicitud.solicitud.EstadoCredito === Estado.Rechazada) {
        this.mensajeError =
          `No se puede realizar una nueva solicitud, ya que el usuario tiene una solicitud anterior en estado
            ${Estado[Estado.Rechazada]}  bajo el numero ${solicitud.solicitud.Numero}`;
        this.limpiarControles = true;
        return false;
      }
    }
    return true;
  }
}
