import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionDePropuestaComponent } from './creacion-de-propuesta.component';

describe('CreacionDePropuestaComponent', () => {
  let component: CreacionDePropuestaComponent;
  let fixture: ComponentFixture<CreacionDePropuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreacionDePropuestaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionDePropuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
