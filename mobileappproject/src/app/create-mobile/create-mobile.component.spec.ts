import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMobileComponent } from './create-mobile.component';

describe('CreateMobileComponent', () => {
  let component: CreateMobileComponent;
  let fixture: ComponentFixture<CreateMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMobileComponent]
    });
    fixture = TestBed.createComponent(CreateMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
