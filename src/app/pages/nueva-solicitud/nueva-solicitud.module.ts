
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaSolicitudComponent } from './nueva-solicitud.component';
import { Routes, RouterModule } from '@angular/router';
import { MontoSolicitarComponent } from 'src/app/components/solicitudes/monto-solicitar/monto-solicitar.component';
import { UserComponent } from 'src/app/components/solicitudes/user/user.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: NuevaSolicitudComponent},
 ];

@NgModule({
  declarations: [
    NuevaSolicitudComponent,
    UserComponent,
    MontoSolicitarComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class NuevaSolicitudModule { }
