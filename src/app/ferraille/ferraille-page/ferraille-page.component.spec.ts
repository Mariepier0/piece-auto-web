import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerraillePageComponent } from './ferraille-page.component';

describe('ServicesEntreprisesPageComponent', () => {
  let component: FerraillePageComponent;
  let fixture: ComponentFixture<FerraillePageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FerraillePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
