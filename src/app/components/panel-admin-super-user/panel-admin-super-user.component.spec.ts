import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdminSuperUserComponent } from './panel-admin-super-user.component';

describe('PanelAdminSuperUserComponent', () => {
  let component: PanelAdminSuperUserComponent;
  let fixture: ComponentFixture<PanelAdminSuperUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelAdminSuperUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelAdminSuperUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
