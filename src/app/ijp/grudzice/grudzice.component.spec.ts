import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrudziceComponent } from './grudzice.component';

describe('GrudziceComponent', () => {
  let component: GrudziceComponent;
  let fixture: ComponentFixture<GrudziceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrudziceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrudziceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
