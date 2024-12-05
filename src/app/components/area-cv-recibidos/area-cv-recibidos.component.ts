import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostulanteService } from '../../services/postulante.service';  // Asegúrate de importar el servicio

@Component({
  selector: 'app-area-cv-recibidos',
  templateUrl: './area-cv-recibidos.component.html',
  styleUrls: ['./area-cv-recibidos.component.css']
})
export class AreaCvRecibidosComponent implements OnInit {
  postulantesPorArea: any[] = [];  // Array para almacenar los postulantes por área

  constructor(
    private router: Router,
    private postulanteService: PostulanteService
  ) {}

  ngOnInit(): void {
    // Esto se ejecutará cuando la componente se inicialice
    // Puedes cargar postulantes por área por defecto si lo deseas
  }

  // Función que se ejecuta al hacer clic en un área
  goTocv(area: string): void {
    // Obtenemos los postulantes por área desde el servicio
    this.postulanteService.getPostulantesByArea(area).subscribe(
      (data) => {
        // Almacenamos los postulantes en el servicio
        this.postulanteService.setPostulantes(data);
        
        // Ahora redirigimos a la página de vista de los CVs
        this.router.navigate(['/vistaCvRecibido']);
      },
      (error) => {
        console.error('Error al obtener postulantes por área:', error);
      }
    );
  }

  goBack() {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');  // Corregido
    console.log('User Data:', userData); // Verifica qué contiene el objeto user

    const userRole = (userData.role || '').trim().toLowerCase();  // Corregido
    console.log('User Role:', userRole); // Verifica qué rol está obteniendo

    if (userRole === 'superadmin') {
      console.log('Redirigiendo a panelAdminSuperUser');
      this.router.navigate(['/panelAdminSuperUser']);
    } else if (userRole === 'admin') {
      console.log('Redirigiendo a panelAdmin');
      this.router.navigate(['/panelAdmin']);
    } else {
      console.warn('No se encontró el rol del usuario, redirigiendo al login');
      this.router.navigate(['/login']);
    }
  }
}
