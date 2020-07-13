import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformeComponent } from './informe.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: InformeComponent},
 ];

@NgModule({
  declarations: [
    InformeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InformeModule { }
