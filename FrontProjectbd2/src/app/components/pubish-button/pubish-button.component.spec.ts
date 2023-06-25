import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubishButtonComponent } from './pubish-button.component';

describe('PubishButtonComponent', () => {
  let component: PubishButtonComponent;
  let fixture: ComponentFixture<PubishButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PubishButtonComponent]
    });
    fixture = TestBed.createComponent(PubishButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
