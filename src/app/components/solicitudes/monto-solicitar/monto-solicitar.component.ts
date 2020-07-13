import { CapitalBaseService } from '../../../services/capital-base.service';
import { environment } from '../../../../environments/environment';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-monto-solicitar',
  templateUrl: './monto-solicitar.component.html',
  styleUrls: ['./monto-solicitar.component.css']
})
export class MontoSolicitarComponent implements OnInit {

  montoMinimo: number;
  montoMaximo: number;
  @Input() montoSolicitado: number;
  @Output() ValorSolicitado = new EventEmitter<number>();
  habilitar: boolean;

  constructor(private montoCapital: CapitalBaseService) {
    this.inicializar();
   }

  ngOnInit(): void {

  }
  inicializar(): void{
    this.montoMaximo = this.montoCapital.Get();
    this.montoMinimo = environment.ValorMInimoAPrestar;
    if (this.montoMinimo > this.montoMaximo){
      this.habilitar = false;
    }else{
      this.habilitar = true;
    }
  }

  SetCapitalBase(): void{
    this.montoCapital.Set(this.montoSolicitado);
  }

  EmitirValor(): void {
    this.ValorSolicitado.emit(this.montoSolicitado);
  }

  InputNumeros(event: KeyboardEvent): boolean{
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
