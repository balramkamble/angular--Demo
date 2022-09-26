import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByBKParentComponent } from './by-bk-parent.component';

describe('ByBKParentComponent', () => {
  let component: ByBKParentComponent;
  let fixture: ComponentFixture<ByBKParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByBKParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByBKParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
