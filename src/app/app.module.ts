import { MensajeService } from './services/mensaje.service';
import { UserComponent } from './components/solicitudes/user/user.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';
import { MontoComponent } from './shared/monto/monto.component';
import { ModalComponent } from './shared/modal/modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MontoComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    MensajeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent
  ]
})
export class AppModule { }
