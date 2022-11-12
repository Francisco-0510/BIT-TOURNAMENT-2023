import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTorneosComponent } from './registrar-torneos.component';

describe('RegistrarTorneosComponent', () => {
  let component: RegistrarTorneosComponent;
  let fixture: ComponentFixture<RegistrarTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTorneosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
