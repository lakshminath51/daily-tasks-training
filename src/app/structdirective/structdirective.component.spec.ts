import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructdirectiveComponent } from './structdirective.component';

describe('StructdirectiveComponent', () => {
  let component: StructdirectiveComponent;
  let fixture: ComponentFixture<StructdirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructdirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
