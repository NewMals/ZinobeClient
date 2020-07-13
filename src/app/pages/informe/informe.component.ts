import { SolicitudUsuario } from './../../models/solicitud-usuario';
import { Router } from '@angular/router';
import { SolicitudService } from './../../services/solicitud.service ';
import { Estado } from './../../models/Estado.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {

  solicitudes: Array<SolicitudUsuario>;
  estado: Estado;

  constructor(private solicitudService: SolicitudService) {
    this.solicitudes = new Array<SolicitudUsuario>();
    this.Get();
  }

  Get(): void {
    this.solicitudes = this.solicitudService.GetSolicitudes();
  }

  ngOnInit(): void {
  }

  EstadoCredito(id: number): any {
    return Estado[id];
  }

  Aprobadas(): void {
    this.solicitudes =  this.solicitudService.GetSolicitudes().filter(f => f.solicitud.EstadoCredito === Estado.Aprobada);
    this.estado = Estado.Aprobada;
  }

  Rechazadas(): void {
    this.solicitudes =  this.solicitudService.GetSolicitudes().filter(f => f.solicitud.EstadoCredito === Estado.Rechazada);
    this.estado = Estado.Rechazada;
  }
  Todas(): void{
    this.solicitudes =  this.solicitudService.GetSolicitudes();
    this.estado = undefined;
  }
}
