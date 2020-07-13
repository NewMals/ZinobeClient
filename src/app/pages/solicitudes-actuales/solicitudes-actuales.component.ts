import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

import { SolicitudUsuario } from 'src/app/models/solicitud-usuario';
import { Router } from '@angular/router';
import { SolicitudService } from 'src/app/services/solicitud.service ';
import { MensajeService } from 'src/app/services/mensaje.service';
import { Estado } from 'src/app/models/Estado.enum';
import { CapitalBaseService } from 'src/app/services/capital-base.service';

@Component({
  selector: 'app-solicitudes-actuales',
  templateUrl: './solicitudes-actuales.component.html',
  styleUrls: ['./solicitudes-actuales.component.css']
})
export class SolicitudesActualesComponent implements OnInit {

  estado : Estado;
  solicitudes: Array<SolicitudUsuario>;

  constructor(private solicitudService: SolicitudService, private userService: UserService
            , private mensajeService: MensajeService, private router: Router
            , private montoCapital: CapitalBaseService) {
    this.solicitudes = new Array<SolicitudUsuario>();
    this.Get();
   }

  ngOnInit(): void {

  }

  Get(): void {
    const usuarios = this.userService.Get();
    if(usuarios.length > 0) {
      usuarios.forEach(user =>  this.solicitudes.push(this.solicitudService.GetSolicitudActualXUsuarios(user.Id)));
    }
  }

  EstadoCredito(id: number): any {
    return Estado[id];
  }

  PagarPrestamo(solicitud: SolicitudUsuario): void{
    const title = 'Informacion';
    const messager = 'El pago del credito con numero de solicitud ' + solicitud.solicitud.Numero
                        + ' ha sido exitoso';
    this.mensajeService.alert(title, messager).subscribe((respuest) => {});
    solicitud.solicitud.PagoCredito = true;
    this.solicitudService.SetSoliciud(solicitud.solicitud);
    this.montoCapital.Set(this.montoCapital.Get() + +solicitud.solicitud.ValorSolicitado);
  }
  NuevaSolicitud(solicitud: SolicitudUsuario): void{
    this.router.navigate(['nuevaSolicitud'], {state: solicitud});
  }
}
