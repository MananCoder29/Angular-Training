import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDirectiveComponent } from './component-directive.component';

describe('ComponentDirectiveComponent', () => {
  let component: ComponentDirectiveComponent;
  let fixture: ComponentFixture<ComponentDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
