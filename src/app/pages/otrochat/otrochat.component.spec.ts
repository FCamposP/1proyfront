import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrochatComponent } from './otrochat.component';

describe('OtrochatComponent', () => {
  let component: OtrochatComponent;
  let fixture: ComponentFixture<OtrochatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrochatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrochatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
