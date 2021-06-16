import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelGallaryComponent } from './model-gallary.component';

describe('ModelGallaryComponent', () => {
  let component: ModelGallaryComponent;
  let fixture: ComponentFixture<ModelGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelGallaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
