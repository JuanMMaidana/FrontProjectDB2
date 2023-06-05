import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationGridComponent } from './publication-grid.component';

describe('PublicationGridComponent', () => {
  let component: PublicationGridComponent;
  let fixture: ComponentFixture<PublicationGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationGridComponent]
    });
    fixture = TestBed.createComponent(PublicationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
