import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEquiposComponent } from './detalle-equipos.component';

describe('DetalleEquiposComponent', () => {
  let component: DetalleEquiposComponent;
  let fixture: ComponentFixture<DetalleEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEquiposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
