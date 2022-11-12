import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEnfrentamientosComponent } from './ver-enfrentamientos.component';

describe('VerEnfrentamientosComponent', () => {
  let component: VerEnfrentamientosComponent;
  let fixture: ComponentFixture<VerEnfrentamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEnfrentamientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEnfrentamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
