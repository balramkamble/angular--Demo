import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByBKChildFirstComponent } from './by-bk-child-first.component';

describe('ByBKChildFirstComponent', () => {
  let component: ByBKChildFirstComponent;
  let fixture: ComponentFixture<ByBKChildFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByBKChildFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByBKChildFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
