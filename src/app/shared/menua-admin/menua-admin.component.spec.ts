import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuaAdminComponent } from './menua-admin.component';

describe('MenuaAdminComponent', () => {
  let component: MenuaAdminComponent;
  let fixture: ComponentFixture<MenuaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
