import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfrentamientoEstudianteComponent } from './enfrentamiento-estudiante.component';

describe('EnfrentamientoEstudianteComponent', () => {
  let component: EnfrentamientoEstudianteComponent;
  let fixture: ComponentFixture<EnfrentamientoEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfrentamientoEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfrentamientoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
