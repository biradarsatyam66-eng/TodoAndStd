import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFiveIoTableComponent } from './std-five-io-table.component';

describe('StdFiveIoTableComponent', () => {
  let component: StdFiveIoTableComponent;
  let fixture: ComponentFixture<StdFiveIoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdFiveIoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdFiveIoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
