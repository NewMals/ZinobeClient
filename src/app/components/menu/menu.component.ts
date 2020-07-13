import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  pages: Array<{ title: string; route: string }>;

  constructor() {
    this.cargarMenu();
  }

  ngOnInit(): void {}

  cargarMenu(): void {
    this.pages = [
      { title: 'Nuevo credito', route: '/nuevaSolicitud' },
      { title: 'Solicitudes', route: '/solicitudes' },
      { title: 'Informe', route: '/informe' },
    ];
  }
}
