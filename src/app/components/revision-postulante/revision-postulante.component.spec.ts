import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionPostulanteComponent } from './revision-postulante.component';

describe('RevisionPostulanteComponent', () => {
  let component: RevisionPostulanteComponent;
  let fixture: ComponentFixture<RevisionPostulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevisionPostulanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevisionPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
