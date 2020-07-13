import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformeComponent } from './pages/informe/informe.component';


const routes: Routes = [
 { path: '', redirectTo: '/solicitudes', pathMatch: 'full'},
 { path: 'solicitudes', loadChildren: () => import('./pages/solicitudes-actuales/solicitudes-actuales.module').then(m => m.SolicitudesActualesModule) },
 { path: 'historial', loadChildren: () => import('./pages/historial/historial.module').then(m => m.HistorialModule) },
 { path: 'nuevaSolicitud', loadChildren: () => import('./pages/nueva-solicitud/nueva-solicitud.module').then(m => m.NuevaSolicitudModule) },
 { path: 'informe', loadChildren: () => import('./pages/informe/informe.module').then(m => m.InformeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
