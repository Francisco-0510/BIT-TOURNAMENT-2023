import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEnfrentamientoComponent } from './detalle-enfrentamiento.component';

describe('DetalleEnfrentamientoComponent', () => {
  let component: DetalleEnfrentamientoComponent;
  let fixture: ComponentFixture<DetalleEnfrentamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEnfrentamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEnfrentamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
