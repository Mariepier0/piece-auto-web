import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteneursPageComponent } from './conteneurs-page.component';

describe('ConteneursPageComponent', () => {
  let component: ConteneursPageComponent;
  let fixture: ComponentFixture<ConteneursPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteneursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
