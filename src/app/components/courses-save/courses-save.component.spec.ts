import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSaveComponent } from './courses-save.component';

describe('CoursesSaveComponent', () => {
  let component: CoursesSaveComponent;
  let fixture: ComponentFixture<CoursesSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
