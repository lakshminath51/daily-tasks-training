import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrselectorsComponent } from './attrselectors.component';

describe('AttrselectorsComponent', () => {
  let component: AttrselectorsComponent;
  let fixture: ComponentFixture<AttrselectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrselectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrselectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
