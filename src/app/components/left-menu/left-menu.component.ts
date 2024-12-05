import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { PropuestaService } from '../../services/propuesta.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  propuestas: any[] = []; // Propuestas obtenidas del backend
  pagedItems: any[] = []; // Items que se muestran en la página actual
  filteredItems: any[] = []; // Items después de aplicar el filtro
  filters = {
    exp: '',
    jornada: '',
    area: '',
    disponibilidad: '',
  }; // Objeto para filtros

  page = 1; // Página inicial
  itemsPerPage = 9; // Número de cards por página

  // Opciones para los filtros
  experienceOptions = Array.from({ length: 4 }, (_, i) => i + 1); // 1 to 4
  jornadaOptions = ['Diurna', 'Nocturna', 'Mixta'];
  areaOptions = ['Áreas TI', 'Áreas de limpieza', 'Áreas marketing', 'Áreas de finanza y contabilidad',
                 'Área de soporte', 'Área de recursos humanos', 'Área de administración',
                 'Área operacional', 'Área de mantención', 'Área de seguridad de cámaras', 
                 'Área guardias'];
  disponibilidadOptions = ['Inmediata', 'Diferida'];

  constructor(private router: Router, private propuestaService: PropuestaService) {}

  ngOnInit() {
    this.obtenerPropuestas(); // Obtiene las propuestas al iniciar el componente
  }

  // Obtener propuestas del backend
  obtenerPropuestas() {
    this.propuestaService.getAllPropuestas().subscribe(
      (data) => {
        this.propuestas = data;
        this.filteredItems = data; // Inicializa con todas las propuestas
        this.setPage(0); // Inicializa con la primera página
      },
      (error) => {
        console.error('Error al obtener propuestas:', error);
      }
    );
  }

  // Aplicar los filtros
  applyFilters() {
    this.filteredItems = this.propuestas.filter(item => {
      return (
        (this.filters.exp === '' || item.experiencia === +this.filters.exp) &&
        (this.filters.jornada === '' || item.jornada.toLowerCase().includes(this.filters.jornada.toLowerCase())) &&
        (this.filters.area === '' || item.area.toLowerCase().includes(this.filters.area.toLowerCase())) &&
        (this.filters.disponibilidad === '' || item.disponibilidad.toLowerCase().includes(this.filters.disponibilidad.toLowerCase()))
      );
    });

    console.log('Propuestas filtradas:', this.filteredItems); // Verifica las propuestas filtradas
    this.setPage(0); // Reinicia a la primera página después de aplicar los filtros
  }

  // Restablecer los filtros
  resetFilters() {
    this.filters = {
      exp: '',
      jornada: '',
      area: '',
      disponibilidad: '',
    };
    this.filteredItems = this.propuestas; // Restablece a todas las propuestas
    this.setPage(0); // Reinicia a la primera página
  }

  // Actualizar los items a mostrar según la página
  setPage(pageIndex: number) {
    const startIndex = pageIndex * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedItems = this.filteredItems.slice(startIndex, endIndex);
    console.log('Items para la página actual:', this.pagedItems); // Verifica los datos paginados
  }

  // Manejar el cambio de página
  onPageChange(event: PageEvent) {
    this.itemsPerPage = event.pageSize; // Cambia el tamaño de la página si el usuario lo modifica
    this.setPage(event.pageIndex); // Actualiza la página actual
  }

  // Navegar al detalle de la propuesta
  // verDetalle(id: number): void {
  //   this.router.navigate(['/propuestaTrabajo',]);
  // }
}
