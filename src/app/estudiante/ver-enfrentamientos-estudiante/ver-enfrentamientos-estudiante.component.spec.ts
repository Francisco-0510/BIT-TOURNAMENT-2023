import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEnfrentamientosEstudianteComponent } from './ver-enfrentamientos-estudiante.component';

describe('VerEnfrentamientosEstudianteComponent', () => {
  let component: VerEnfrentamientosEstudianteComponent;
  let fixture: ComponentFixture<VerEnfrentamientosEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEnfrentamientosEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEnfrentamientosEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
