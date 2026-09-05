import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSixIoFormComponent } from './std-six-io-form.component';

describe('StdSixIoFormComponent', () => {
  let component: StdSixIoFormComponent;
  let fixture: ComponentFixture<StdSixIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdSixIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdSixIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
