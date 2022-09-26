import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverChildComponent } from './receiver-child.component';

describe('ReceiverChildComponent', () => {
  let component: ReceiverChildComponent;
  let fixture: ComponentFixture<ReceiverChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
