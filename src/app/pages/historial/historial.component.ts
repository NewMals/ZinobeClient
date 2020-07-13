import { Estado } from '../../models/Estado.enum';
import { SolicitudService } from '../../services/solicitud.service ';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitudUsuario } from '../../models/solicitud-usuario';
import { User } from '../../models/user';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  estado: Estado;
  solicitudes: Array<SolicitudUsuario>;
  usuario: User;

  constructor(private solicitudService: SolicitudService, private router: Router) {
    const state = this.router.getCurrentNavigation().extras.state;
    if(state){
      this.usuario = state.user;
      this.solicitudes = this.solicitudService.GetSolicitudesXUsuario(this.usuario.Id);
    }else{
      this.usuario = new User();
      this.solicitudes = new Array<SolicitudUsuario>();
    }
  }

  ngOnInit(): void {
  }

  EstadoCredito(id: number): any {
    return Estado[id];
  }

  Regresar(): void {
    this.router.navigate(['/solicitudes']);
  }
}


// import { HistorialComponent } from './historial.component';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [
//  { path: 'historial', component: HistorialComponent},
// ];

// @NgModule({
//   imports: [
//     CommonModule,
//     HistorialComponent,
//     RouterModule.forChild(routes)],
//   exports: [RouterModule]

// })
// export class HistorialModule { }
