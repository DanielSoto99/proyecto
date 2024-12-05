import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCvRecibidosComponent } from './area-cv-recibidos.component';

describe('AreaCvRecibidosComponent', () => {
  let component: AreaCvRecibidosComponent;
  let fixture: ComponentFixture<AreaCvRecibidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreaCvRecibidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaCvRecibidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
