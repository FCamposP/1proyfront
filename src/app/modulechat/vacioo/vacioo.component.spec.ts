import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaciooComponent } from './vacioo.component';

describe('VaciooComponent', () => {
  let component: VaciooComponent;
  let fixture: ComponentFixture<VaciooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaciooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaciooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
