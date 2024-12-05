import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostulanteService } from '../../services/postulante.service';  // Importa el servicio

@Component({
  selector: 'app-vista-cv-recibido',
  templateUrl: './vista-cv-recibido.component.html',
  styleUrls: ['./vista-cv-recibido.component.css']
})
export class VistaCvRecibidoComponent implements OnInit {
  postulantes: any[] = [];  // Array para almacenar los postulantes por área

  constructor(
    private router: Router,
    private postulanteService: PostulanteService
  ) {}

  ngOnInit(): void {
    // Obtener los postulantes almacenados en el servicio
    this.postulantes = this.postulanteService.getPostulantes();
    
    if (this.postulantes.length === 0) {
      console.error('No hay postulantes disponibles.');
    }
  }

  // Función que navega al detalle de un postulante
  goToDetalle(postulanteId: string): void {
    this.router.navigate(['/revisionPostulante', postulanteId]);
  }

  // Función para navegar hacia atrás
  goBack() {
    this.router.navigate(['/cvRecibidos']);
  }
}
