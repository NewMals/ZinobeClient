import { ModalComponent } from './../shared/modal/modal.component';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  alert(title: string, messager): Observable<string>{
    const initialState = {
      title,
      messager,
    };
    this.bsModalRef = this.modalService.show(ModalComponent, {initialState});

    return new Observable<any>(this.getAlertSuscribe());
  }

  private getAlertSuscribe(): any{
    return (observer) => {
      const subscription = this.modalService.onHidden.subscribe((reason: string) => {
        observer.complete();
      });

      return {
        unsubscribe(): void {
          subscription.unsubscribe();
        }
      }
    }
  }
}
