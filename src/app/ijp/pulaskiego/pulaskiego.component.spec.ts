import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulaskiegoComponent } from './pulaskiego.component';

describe('PulaskiegoComponent', () => {
  let component: PulaskiegoComponent;
  let fixture: ComponentFixture<PulaskiegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulaskiegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulaskiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
