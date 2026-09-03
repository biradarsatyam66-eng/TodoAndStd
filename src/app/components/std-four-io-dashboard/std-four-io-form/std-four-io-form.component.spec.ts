import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFourIoFormComponent } from './std-four-io-form.component';

describe('StdFourIoFormComponent', () => {
  let component: StdFourIoFormComponent;
  let fixture: ComponentFixture<StdFourIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdFourIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdFourIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
