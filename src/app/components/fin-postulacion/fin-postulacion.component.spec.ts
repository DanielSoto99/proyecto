import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinPostulacionComponent } from './fin-postulacion.component';

describe('FinPostulacionComponent', () => {
  let component: FinPostulacionComponent;
  let fixture: ComponentFixture<FinPostulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinPostulacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinPostulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
