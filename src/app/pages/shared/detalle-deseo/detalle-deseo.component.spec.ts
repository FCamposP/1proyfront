import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeseoComponent } from './detalle-deseo.component';

describe('DetalleDeseoComponent', () => {
  let component: DetalleDeseoComponent;
  let fixture: ComponentFixture<DetalleDeseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDeseoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDeseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
