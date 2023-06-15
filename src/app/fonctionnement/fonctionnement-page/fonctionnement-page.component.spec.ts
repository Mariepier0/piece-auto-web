import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionnementPageComponent } from './fonctionnement-page.component';

describe('FonctionnementPageComponent', () => {
  let component: FonctionnementPageComponent;
  let fixture: ComponentFixture<FonctionnementPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FonctionnementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
