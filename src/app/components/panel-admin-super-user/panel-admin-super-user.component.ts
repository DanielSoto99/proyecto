import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-admin-super-user',
  templateUrl: './panel-admin-super-user.component.html',
  styleUrl: './panel-admin-super-user.component.css'
})
export class PanelAdminSuperUserComponent {

  constructor (private router: Router) {}

  goToCrearPropuesta() {
    this.router.navigate(['/creacionPropuesta']);
  }

  goToCvRecibidos() {
    this.router.navigate(['/cvRecibidos']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToPowerBi() {
    this.router.navigate(['/powerbi']);
  }

  editar() {
    this.router.navigate(['/listadoPostulaciones']);
  }

}
