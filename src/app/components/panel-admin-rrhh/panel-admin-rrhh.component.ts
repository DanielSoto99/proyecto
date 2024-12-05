import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-admin-rrhh',
  templateUrl: './panel-admin-rrhh.component.html',
  styleUrl: './panel-admin-rrhh.component.css'
})
export class PanelAdminRrhhComponent {

  constructor(private router : Router) {}

  goToCvRecibidos() {
    this.router.navigate(['/cvRecibidos']);
  }


  goToCrearPropuesta() {
    this.router.navigate(['/creacionPropuesta']);
  }

  editar() {
    this.router.navigate(['/listadoPostulaciones']);
  }
}
