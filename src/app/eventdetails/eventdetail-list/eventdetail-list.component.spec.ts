import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetailListComponent } from './eventdetail-list.component';

describe('EventdetailListComponent', () => {
  let component: EventdetailListComponent;
  let fixture: ComponentFixture<EventdetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
