import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdminRrhhComponent } from './panel-admin-rrhh.component';

describe('PanelAdminRrhhComponent', () => {
  let component: PanelAdminRrhhComponent;
  let fixture: ComponentFixture<PanelAdminRrhhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelAdminRrhhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelAdminRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
