import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEntreprisesPageComponent } from './services_entreprises-page.component';

describe('ServicesEntreprisesPageComponent', () => {
  let component: ServicesEntreprisesPageComponent;
  let fixture: ComponentFixture<ServicesEntreprisesPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesEntreprisesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
