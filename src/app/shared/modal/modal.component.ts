import { SolicitudService } from './../../services/solicitud.service ';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SolicitudesComponent } from 'src/app/pages/solicitudes/solicitudes.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  title: string;
  messager: string;

  constructor(public bsModalRef: BsModalRef, private solicitudService: SolicitudService) { }

  ngOnInit(): void {
  }

  Confirmar(): void {
    this.bsModalRef.hide();
  }
}
