import { SolicitudesActualesComponent } from './solicitudes-actuales.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SolicitudesActualesComponent},
 ];

@NgModule({
  declarations: [
    SolicitudesActualesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SolicitudesActualesModule { }
