import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicessubComponent } from './servicessub.component';

describe('ServicessubComponent', () => {
  let component: ServicessubComponent;
  let fixture: ComponentFixture<ServicessubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicessubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicessubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
