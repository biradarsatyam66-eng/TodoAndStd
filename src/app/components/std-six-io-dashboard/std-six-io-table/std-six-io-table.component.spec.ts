import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSixIoTableComponent } from './std-six-io-table.component';

describe('StdSixIoTableComponent', () => {
  let component: StdSixIoTableComponent;
  let fixture: ComponentFixture<StdSixIoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdSixIoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdSixIoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
