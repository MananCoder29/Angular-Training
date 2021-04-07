import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationVsPropertyBindingComponent } from './interpolation-vs-property-binding.component';

describe('InterpolationVsPropertyBindingComponent', () => {
  let component: InterpolationVsPropertyBindingComponent;
  let fixture: ComponentFixture<InterpolationVsPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationVsPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationVsPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
