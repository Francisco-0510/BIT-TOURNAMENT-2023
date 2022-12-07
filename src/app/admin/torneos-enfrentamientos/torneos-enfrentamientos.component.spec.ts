import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneosEnfrentamientosComponent } from './torneos-enfrentamientos.component';

describe('TorneosEnfrentamientosComponent', () => {
  let component: TorneosEnfrentamientosComponent;
  let fixture: ComponentFixture<TorneosEnfrentamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneosEnfrentamientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneosEnfrentamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
