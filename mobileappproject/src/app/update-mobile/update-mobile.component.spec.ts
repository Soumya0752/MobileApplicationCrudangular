import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMobileComponent } from './update-mobile.component';

describe('UpdateMobileComponent', () => {
  let component: UpdateMobileComponent;
  let fixture: ComponentFixture<UpdateMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMobileComponent]
    });
    fixture = TestBed.createComponent(UpdateMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});