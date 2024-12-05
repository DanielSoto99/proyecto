import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulantesAceptadosComponent } from './postulantes-aceptados.component';

describe('PostulantesAceptadosComponent', () => {
  let component: PostulantesAceptadosComponent;
  let fixture: ComponentFixture<PostulantesAceptadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostulantesAceptadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostulantesAceptadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
