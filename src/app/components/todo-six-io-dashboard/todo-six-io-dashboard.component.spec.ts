import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSixIoDashboardComponent } from './todo-six-io-dashboard.component';

describe('TodoSixIoDashboardComponent', () => {
  let component: TodoSixIoDashboardComponent;
  let fixture: ComponentFixture<TodoSixIoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSixIoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSixIoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
