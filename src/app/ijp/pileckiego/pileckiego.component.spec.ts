import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PileckiegoComponent } from './pileckiego.component';

describe('PileckiegoComponent', () => {
  let component: PileckiegoComponent;
  let fixture: ComponentFixture<PileckiegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PileckiegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PileckiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
