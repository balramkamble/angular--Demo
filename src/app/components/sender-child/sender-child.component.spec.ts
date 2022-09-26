import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderChildComponent } from './sender-child.component';

describe('SenderChildComponent', () => {
  let component: SenderChildComponent;
  let fixture: ComponentFixture<SenderChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
