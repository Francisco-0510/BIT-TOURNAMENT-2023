import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTorneoComponent } from './detalle-torneo.component';

describe('DetalleTorneoComponent', () => {
  let component: DetalleTorneoComponent;
  let fixture: ComponentFixture<DetalleTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTorneoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
