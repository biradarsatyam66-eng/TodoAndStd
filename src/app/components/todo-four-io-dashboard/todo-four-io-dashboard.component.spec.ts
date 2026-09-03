import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFourIoDashboardComponent } from './todo-four-io-dashboard.component';

describe('TodoFourIoDashboardComponent', () => {
  let component: TodoFourIoDashboardComponent;
  let fixture: ComponentFixture<TodoFourIoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFourIoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFourIoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
