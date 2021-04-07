import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentComponentComponent } from './assignment-component.component';

describe('AssignmentComponentComponent', () => {
  let component: AssignmentComponentComponent;
  let fixture: ComponentFixture<AssignmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
