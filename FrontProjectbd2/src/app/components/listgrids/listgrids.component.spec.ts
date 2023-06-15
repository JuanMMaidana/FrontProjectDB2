import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgridsComponent } from './listgrids.component';

describe('ListgridsComponent', () => {
  let component: ListgridsComponent;
  let fixture: ComponentFixture<ListgridsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListgridsComponent]
    });
    fixture = TestBed.createComponent(ListgridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
