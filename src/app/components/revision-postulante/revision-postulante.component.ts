import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostulanteService } from '../../services/postulante.service';

@Component({
  selector: 'app-revision-postulante',
  templateUrl: './revision-postulante.component.html',
  styleUrls: ['./revision-postulante.component.css']
})
export class RevisionPostulanteComponent implements OnInit {
  postulante: any;  // Para almacenar los datos del postulante
  postulantesAceptados: any[] = [];  // Array para almacenar los postulantes aceptados

  constructor(
    private router: Router,
    private postulanteService: PostulanteService,
    private route: ActivatedRoute  // Para obtener el parámetro del ID
  ) {}

  ngOnInit(): void {
    const postulanteId = this.route.snapshot.paramMap.get('id');
    if (postulanteId) {
      this.postulanteService.getPostulanteById(postulanteId).subscribe(
        (data) => {
          this.postulante = data;
          console.log('CV URL:', this.postulante.cv);  // Verifica la URL del CV
        },
        (error) => {
          console.error('Error al obtener el postulante:', error);
        }
      );
    } else {
      console.error('ID de postulante no encontrado.');
    }
  }

  goBack(): void {
    this.router.navigate(['/vistaCvRecibido']);
  }

  // Función para manejar la descarga del CV
  downloadCv(): void {
    if (this.postulante?.cv) {
      const link = document.createElement('a');
      link.href = this.postulante.cv;
      link.target = '_blank';
      link.download = 'cv-postulante.pdf';
      link.click();
    } else {
      console.error('No hay CV disponible para descargar');
    }
  }

  // Función para aceptar un postulante y mostrar una alerta de éxito
  acceptPostulante(): void {
    // Agregar el postulante aceptado al array
    this.postulantesAceptados.push(this.postulante);

    // Mostrar la alerta de éxito
    alert('¡El postulante ha sido aceptado con éxito!');

    // Redirigir a la página de postulantes aceptados
    this.router.navigate(['/postulantesAceptados'], {
      state: { postulante: this.postulante }  // Pasar los datos del postulante a la siguiente página
    });
  }

  deletePostulante(): void {
    const postulanteId = this.route.snapshot.paramMap.get('id');
    if (postulanteId) {
      const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este postulante permanentemente?');
  
      if (confirmacion) {
        this.postulanteService.deletePostulante(postulanteId).subscribe(
          (response) => {
            console.log('Postulante eliminado:', response);
            this.router.navigate(['/cvRecibidos']);
          },
          (error) => {
            console.error('Error al eliminar el postulante:', error);
          }
        );
      } else {
        console.log('Eliminación cancelada');
      }
    } else {
      console.error('ID de postulante no encontrado.');
    }
  }
}
