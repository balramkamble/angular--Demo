import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByBKChildSecondComponent } from './by-bk-child-second.component';

describe('ByBKChildSecondComponent', () => {
  let component: ByBKChildSecondComponent;
  let fixture: ComponentFixture<ByBKChildSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByBKChildSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByBKChildSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
