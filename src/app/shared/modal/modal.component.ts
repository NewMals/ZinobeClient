import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  title: string;
  messager: string;

  constructor(
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit(): void {}

  Confirmar(): void {
    this.bsModalRef.hide();
  }
}
