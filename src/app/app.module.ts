import { HistorialComponent } from './pages/historial/historial.component';
import { PagarComponent } from './components/solicitudes/pagar/pagar.component';
import { MensajeService } from './services/mensaje.service';
import { UserComponent } from './components/solicitudes/user/user.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';
import { MontoComponent } from './shared/monto/monto.component';
import { MontoSolicitarComponent } from './components/solicitudes/monto-solicitar/monto-solicitar.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { ModalComponent } from './shared/modal/modal.component';
import { SolicitudesActualesComponent } from './pages/solicitudes-actuales/solicitudes-actuales.component';
import { InformeComponent } from './pages/informe/informe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    MenuComponent,
    MontoComponent,
    MontoSolicitarComponent,
    SolicitudesComponent,
    HistorialComponent,
    PagarComponent,
    ModalComponent,
    SolicitudesActualesComponent,
    InformeComponent
  ],
  imports: [
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
