import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { CapitalBaseService } from 'src/app/services/capital-base.service';
import { SolicitudService } from 'src/app/services/solicitud.service ';

@Component({
  selector: 'app-monto',
  templateUrl: './monto.component.html',
  styleUrls: ['./monto.component.css'],
})
export class MontoComponent implements OnInit {
  montoGeneral: number;

  constructor(
    private solicitudService: SolicitudService,
    private montoCapital: CapitalBaseService
  ) {
    if (!environment.production) {
      this.SetMontoCapital();
    }
  }

  ngOnInit(): void {
    this.montoGeneral = this.montoCapital.Get();
  }

  SetMontoCapital(): void {
    const montos = this.solicitudService.GetMontoSolicitadoTotal();
    this.montoCapital.Set(environment.CapitalBase - montos);
  }
}
