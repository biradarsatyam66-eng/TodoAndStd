import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFiveIoDashboardComponent } from './todo-five-io-dashboard.component';

describe('TodoFiveIoDashboardComponent', () => {
  let component: TodoFiveIoDashboardComponent;
  let fixture: ComponentFixture<TodoFiveIoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFiveIoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFiveIoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
