import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropuestaService } from '../../services/propuesta.service';

@Component({
  selector: 'app-propuesta-trabajo',
  templateUrl: './propuesta-trabajo.component.html',
  styleUrls: ['./propuesta-trabajo.component.css']
})
export class PropuestaTrabajoComponent implements OnInit {
  propuesta: any; // Variable para almacenar los datos de la propuesta

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propuestaService: PropuestaService
  ) {}

  ngOnInit() {
    // Obtener el ID de la URL
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.cargarPropuesta(id); // Cargar los datos de la propuesta
    }
  }

  cargarPropuesta(id: number) {
    this.propuestaService.getPropuestaById(id).subscribe(
      (data) => {
        console.log('Propuesta obtenida desde el backend:', data); // Verifica los datos obtenidos
        this.propuesta = data; // Asigna los datos a la variable propuesta
      },
      (error) => {
        console.error('Error al obtener la propuesta:', error);
      }
    );
  }

  // Navegar al formulario de postulación
  goToPostular() {
    this.router.navigate(['/formulario']);
  }

  // Volver al menú de usuario
  goToMenuUser() {
    this.router.navigate(['/menuUser']);
  }
}
