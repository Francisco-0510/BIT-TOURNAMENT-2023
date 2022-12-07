import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirTorneosComponent } from './inscribir-torneos.component';

describe('InscribirTorneosComponent', () => {
  let component: InscribirTorneosComponent;
  let fixture: ComponentFixture<InscribirTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscribirTorneosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscribirTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
