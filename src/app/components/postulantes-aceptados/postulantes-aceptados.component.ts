import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postulantes-aceptados',
  templateUrl: './postulantes-aceptados.component.html',
  styleUrls: ['./postulantes-aceptados.component.css']
})
export class PostulantesAceptadosComponent implements OnInit {
  postulante: any; // Recibimos los datos del postulante aceptado

  ngOnInit(): void {
    // Obtener los datos del postulante pasados por la navegación a través de history.state
    const navigation = history.state;
    if (navigation && navigation.postulante) {
      this.postulante = navigation.postulante;
    } else {
      console.error('No se encontró el postulante');
    }
  }
}
