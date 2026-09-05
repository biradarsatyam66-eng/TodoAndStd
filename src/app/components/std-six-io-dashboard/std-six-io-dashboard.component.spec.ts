import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSixIoDashboardComponent } from './std-six-io-dashboard.component';

describe('StdSixIoDashboardComponent', () => {
  let component: StdSixIoDashboardComponent;
  let fixture: ComponentFixture<StdSixIoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdSixIoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdSixIoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
