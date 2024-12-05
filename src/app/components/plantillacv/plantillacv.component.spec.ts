import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillacvComponent } from './plantillacv.component';

describe('PlantillacvComponent', () => {
  let component: PlantillacvComponent;
  let fixture: ComponentFixture<PlantillacvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillacvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantillacvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
