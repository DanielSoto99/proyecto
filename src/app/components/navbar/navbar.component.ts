import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Importación del servicio
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuActive: boolean = false; // Estado para el menú desplegable
  isLoggedIn: boolean = false; // Estado de autenticación
  private authSubscription!: Subscription; // Manejo de la suscripción

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Suscribirse a los cambios en el estado de autenticación
    this.authSubscription = this.authService.isLoggedIn().subscribe((status) => {
      this.isLoggedIn = status; // Actualiza el estado dinámicamente
    });
  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar fugas de memoria
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  // Lógica para cerrar sesión
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']); // Redirige a la página principal
  }

  // Lógica para ir al login
  goToLogin(): void {
    this.router.navigate(['/login']); // Redirige a la página de login
  }

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }
}
