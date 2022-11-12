import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVideojuegosComponent } from './ver-videojuegos.component';

describe('VerVideojuegosComponent', () => {
  let component: VerVideojuegosComponent;
  let fixture: ComponentFixture<VerVideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerVideojuegosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerVideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
