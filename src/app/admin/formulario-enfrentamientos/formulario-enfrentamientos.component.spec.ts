import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEnfrentamientosComponent } from './formulario-enfrentamientos.component';

describe('FormularioEnfrentamientosComponent', () => {
  let component: FormularioEnfrentamientosComponent;
  let fixture: ComponentFixture<FormularioEnfrentamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEnfrentamientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEnfrentamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
