import { Component, OnInit } from '@angular/core';
import { PropuestaService } from '../../services/propuesta.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-listado-postulaciones',
  templateUrl: './listado-postulaciones.component.html',
  styleUrls: ['./listado-postulaciones.component.css'],
})
export class ListadoPostulacionesComponent implements OnInit {
  propuestas: any[] = [];

  constructor(
    private propuestaService: PropuestaService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.obtenerPropuestas();
  }

  obtenerPropuestas(): void {
    this.propuestaService.getAllPropuestas().subscribe({
      next: (data) => {
        this.propuestas = data;
      },
      error: (error) => {
        console.error('Error al obtener las propuestas:', error);
      },
    });
  }

  updatePropuesta(id: number): void {
    this.router.navigate(['/creacionPropuesta', id]);
  }

  eliminarPropuesta(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta propuesta?')) {
      this.propuestaService.deletePropuesta(id).subscribe({
        next: () => {
          this.propuestas = this.propuestas.filter((propuesta) => propuesta.id !== id);
          alert('Propuesta eliminada con éxito.');
        },
        error: (error) => {
          console.error('Error al eliminar la propuesta:', error);
        },
      });
    }
  }

  volver(): void {
    const userRole = this.authService.getUserRole();
    console.log('Rol del usuario:', userRole); // Depuración para verificar el rol

    if (userRole === 'admin') {
      this.router.navigate(['/panelAdmin']);
    } else if (userRole === 'superadmin') {
      this.router.navigate(['/panelAdminSuperUser']);
    } else {
      console.error('Rol de usuario no válido o no autenticado');
      this.router.navigate(['/login']);
    }
  }
}
