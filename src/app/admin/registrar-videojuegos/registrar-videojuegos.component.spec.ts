import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarVideojuegosComponent } from './registrar-videojuegos.component';

describe('RegistrarVideojuegosComponent', () => {
  let component: RegistrarVideojuegosComponent;
  let fixture: ComponentFixture<RegistrarVideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarVideojuegosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarVideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
