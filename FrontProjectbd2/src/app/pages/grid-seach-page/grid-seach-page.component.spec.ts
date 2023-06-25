import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSeachPageComponent } from './grid-seach-page.component';

describe('GridSeachPageComponent', () => {
  let component: GridSeachPageComponent;
  let fixture: ComponentFixture<GridSeachPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridSeachPageComponent]
    });
    fixture = TestBed.createComponent(GridSeachPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
