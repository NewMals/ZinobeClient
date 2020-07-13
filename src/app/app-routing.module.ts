import { HistorialComponent } from './pages/historial/historial.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { SolicitudesActualesComponent } from './pages/solicitudes-actuales/solicitudes-actuales.component';
import { InformeComponent } from './pages/informe/informe.component';


const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full'},
 { path: 'home', component: SolicitudesActualesComponent},
 { path: 'historial', component: HistorialComponent},
 { path: 'solicitud', component: SolicitudesComponent},
 { path: 'informe', component: InformeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
