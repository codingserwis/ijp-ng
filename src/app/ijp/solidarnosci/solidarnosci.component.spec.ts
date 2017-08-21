import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidarnosciComponent } from './solidarnosci.component';

describe('SolidarnosciComponent', () => {
  let component: SolidarnosciComponent;
  let fixture: ComponentFixture<SolidarnosciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidarnosciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidarnosciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
