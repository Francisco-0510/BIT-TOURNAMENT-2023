import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTorneosComponent } from './ver-torneos.component';

describe('VerTorneosComponent', () => {
  let component: VerTorneosComponent;
  let fixture: ComponentFixture<VerTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTorneosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
