import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdcComponent } from './ddc.component';

describe('DdcComponent', () => {
  let component: DdcComponent;
  let fixture: ComponentFixture<DdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
