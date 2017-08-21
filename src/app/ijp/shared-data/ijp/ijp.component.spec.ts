import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IjpComponent } from './ijp.component';

describe('IjpComponent', () => {
  let component: IjpComponent;
  let fixture: ComponentFixture<IjpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IjpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IjpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
