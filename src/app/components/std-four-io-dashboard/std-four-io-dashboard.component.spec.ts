import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFourIoDashboardComponent } from './std-four-io-dashboard.component';

describe('StdFourIoDashboardComponent', () => {
  let component: StdFourIoDashboardComponent;
  let fixture: ComponentFixture<StdFourIoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdFourIoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdFourIoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
