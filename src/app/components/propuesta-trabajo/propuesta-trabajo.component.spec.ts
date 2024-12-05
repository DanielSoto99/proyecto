import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaTrabajoComponent } from './propuesta-trabajo.component';

describe('PropuestaTrabajoComponent', () => {
  let component: PropuestaTrabajoComponent;
  let fixture: ComponentFixture<PropuestaTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropuestaTrabajoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropuestaTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
