import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPostulacionesComponent } from './listado-postulaciones.component';

describe('ListadoPostulacionesComponent', () => {
  let component: ListadoPostulacionesComponent;
  let fixture: ComponentFixture<ListadoPostulacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoPostulacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoPostulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
