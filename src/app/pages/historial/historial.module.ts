import { HistorialComponent } from './historial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
 { path: '', component: HistorialComponent},
];

@NgModule({
  declarations: [HistorialComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HistorialModule { }
