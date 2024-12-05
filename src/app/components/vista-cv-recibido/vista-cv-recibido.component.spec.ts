import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCvRecibidoComponent } from './vista-cv-recibido.component';

describe('VistaCvRecibidoComponent', () => {
  let component: VistaCvRecibidoComponent;
  let fixture: ComponentFixture<VistaCvRecibidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaCvRecibidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaCvRecibidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
