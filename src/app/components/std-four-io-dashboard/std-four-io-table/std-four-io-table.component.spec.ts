import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFourIoTableComponent } from './std-four-io-table.component';

describe('StdFourIoTableComponent', () => {
  let component: StdFourIoTableComponent;
  let fixture: ComponentFixture<StdFourIoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdFourIoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdFourIoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
