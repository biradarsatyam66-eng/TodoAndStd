import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFiveIoFormComponent } from './std-five-io-form.component';

describe('StdFiveIoFormComponent', () => {
  let component: StdFiveIoFormComponent;
  let fixture: ComponentFixture<StdFiveIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdFiveIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdFiveIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
