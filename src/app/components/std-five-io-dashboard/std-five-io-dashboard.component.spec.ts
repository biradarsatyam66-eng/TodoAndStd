import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFiveIoDashboardComponent } from './std-five-io-dashboard.component';

describe('StdFiveIoDashboardComponent', () => {
  let component: StdFiveIoDashboardComponent;
  let fixture: ComponentFixture<StdFiveIoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdFiveIoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdFiveIoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
