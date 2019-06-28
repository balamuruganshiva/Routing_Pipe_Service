import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicescontentComponent } from './servicescontent.component';

describe('ServicescontentComponent', () => {
  let component: ServicescontentComponent;
  let fixture: ComponentFixture<ServicescontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicescontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicescontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
