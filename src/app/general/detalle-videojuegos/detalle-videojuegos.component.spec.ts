import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVideojuegosComponent } from './detalle-videojuegos.component';

describe('DetalleVideojuegosComponent', () => {
  let component: DetalleVideojuegosComponent;
  let fixture: ComponentFixture<DetalleVideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVideojuegosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
