import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostulanteService } from '../../services/postulante.service';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css'],
})
export class FormularioContactoComponent {
  postulacionForm: FormGroup;
  cvFile: File | null = null; // Variable para almacenar el archivo

  // Lista de áreas disponibles para selección
  areas = [
    'Áreas TI',
    'Áreas de limpieza',
    'Áreas de marketing',
    'Áreas de finanza y contabilidad',
    'Área de soporte',
    'Área de recursos humanos',
    'Área de administración',
    'Área operacional',
    'Área de mantención',
    'Área de seguridad de cámaras',
    'Área guardias'
  ];

  comunas = [
    'Santiago', 'Providencia', 'Las Condes', 'Vitacura', 'La Reina', 'Ñuñoa',
    'Peñalolén', 'Macul', 'La Florida', 'Puente Alto', 'San Joaquín',
    'San Miguel', 'La Cisterna', 'El Bosque', 'Lo Espejo',
    'Pedro Aguirre Cerda', 'Cerrillos', 'Estación Central', 'Maipú',
    'Pudahuel', 'Lo Prado', 'Quinta Normal', 'Renca', 'Cerro Navia',
    'Independencia', 'Recoleta', 'Huechuraba', 'Conchalí', 'Quilicura',
    'San Bernardo', 'La Granja', 'Lo Barnechea'
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private postulanteService: PostulanteService
  ) {
    this.postulacionForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cv: [''],
      rut: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
      comuna: ['', Validators.required],
      genero: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      area: ['', Validators.required] // Campo para área
    });
  }

  // Manejar el archivo seleccionado
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.cvFile = input.files[0];
      console.log('Archivo seleccionado:', this.cvFile.name);
    }
  }

  // Manejar el envío del formulario
  onSubmit() {
    if (this.postulacionForm.valid && this.cvFile) { // Verificar que el archivo esté seleccionado
      const formData = new FormData();

      // Agregar valores del formulario
      Object.keys(this.postulacionForm.controls).forEach((key) => {
        if (key !== 'cv') {
          formData.append(key, this.postulacionForm.get(key)?.value || '');
        }
      });

      // Agregar el archivo al FormData
      formData.append('cv', this.cvFile);

      // Enviar los datos
      this.postulanteService.createPostulante(formData).subscribe(
        (response) => {
          console.log('Postulación enviada con éxito:', response);
          this.router.navigate(['/finPostulacion']); // Redirigir al mensaje de éxito
        },
        (error) => {
          console.error('Error al enviar la postulación:', error);
        }
      );
    } else {
      console.log('Formulario no válido o archivo no seleccionado');
    }
  }

  goTofinPostulacion() {
    this.router.navigate(['/finPostulacion']);
  }
}
