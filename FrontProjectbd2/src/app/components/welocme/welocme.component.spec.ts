import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelocmeComponent } from './welocme.component';

describe('WelocmeComponent', () => {
  let component: WelocmeComponent;
  let fixture: ComponentFixture<WelocmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelocmeComponent]
    });
    fixture = TestBed.createComponent(WelocmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
