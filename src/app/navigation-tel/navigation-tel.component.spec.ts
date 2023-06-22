import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTelComponent } from './navigation-tel.component';

describe('NavigationTelComponent', () => {
  let component: NavigationTelComponent;
  let fixture: ComponentFixture<NavigationTelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationTelComponent]
    });
    fixture = TestBed.createComponent(NavigationTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});