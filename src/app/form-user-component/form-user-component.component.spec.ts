import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserComponentComponent } from './form-user-component.component';

describe('FormUserComponentComponent', () => {
  let component: FormUserComponentComponent;
  let fixture: ComponentFixture<FormUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
