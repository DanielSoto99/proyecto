import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropuestaService } from '../../services/propuesta.service';

@Component({
  selector: 'app-creacion-de-propuesta',
  templateUrl: './creacion-de-propuesta.component.html',
  styleUrls: ['./creacion-de-propuesta.component.css']
})
export class CreacionDePropuestaComponent implements OnInit {
  titulo: string = '';
  selectedArea: string = '';
  informacion: string = '';
  disponibilidad: string = 'Inmediata';
  experiencia: number = 1;
  jornada: string = 'Diurna';
  areaOptions: string[] = [
    'Áreas TI', 'Áreas de limpieza', 'Áreas de marketing', 'Áreas de finanza y contabilidad',
    'Área de soporte', 'Área de recursos humanos', 'Área de administración',
    'Área operacional', 'Área de mantención', 'Área de seguridad de cámaras', 'Área guardias'
  ];
  isDropdownOpen: boolean = false;

  constructor(
    private router: Router,
    private propuestaService: PropuestaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // Obtener el ID desde la URL
    if (id) {
      this.cargarPropuesta(id); // Cargar la propuesta si es una edición
    }
  }

  cargarPropuesta(id: number): void {
    this.propuestaService.getPropuestaById(id).subscribe((propuesta) => {
      this.titulo = propuesta.titulo;
      this.selectedArea = propuesta.area;
      this.informacion = propuesta.informacion;
      this.disponibilidad = propuesta.disponibilidad;
      this.experiencia = propuesta.experiencia;
      this.jornada = propuesta.jornada;
    });
  }

  isFormValid(): boolean {
    return (
      this.titulo.trim() !== '' &&
      this.selectedArea.trim() !== '' &&
      this.informacion.trim() !== '' &&
      this.disponibilidad.trim() !== '' &&
      this.jornada.trim() !== '' &&
      this.experiencia >= 1 && this.experiencia <= 4
    );
  }

  guardarPropuesta(): void {
    const id = this.route.snapshot.params['id']; // Obtener el ID desde la URL

    const propuestaData = {
      titulo: this.titulo.trim(),
      area: this.selectedArea.trim(),
      informacion: this.informacion.trim(),
      disponibilidad: this.disponibilidad.trim(),
      experiencia: this.experiencia,
      jornada: this.jornada.trim()
    };

    if (id) {
      this.propuestaService.updatePropuesta(id, propuestaData).subscribe(
        (response) => {
          console.log('Propuesta actualizada con éxito:', response);
          this.router.navigate(['/listadoPostulaciones']);
        },
        (error) => {
          console.error('Error al actualizar la propuesta:', error);
        }
      );
    } else {
      this.propuestaService.createPropuesta(propuestaData).subscribe(
        (response) => {
          console.log('Propuesta creada con éxito:', response);
          this.router.navigate(['/listadoPostulaciones']);
        },
        (error) => {
          console.error('Error al crear la propuesta:', error);
        }
      );
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen; // Cambia el estado del menú desplegable
  }

  selectArea(area: string): void {
    this.selectedArea = area; // Asigna el área seleccionada
    this.isDropdownOpen = false; // Cierra el menú desplegable
  }
}
