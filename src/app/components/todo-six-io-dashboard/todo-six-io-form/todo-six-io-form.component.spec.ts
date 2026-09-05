import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSixIoFormComponent } from './todo-six-io-form.component';

describe('TodoSixIoFormComponent', () => {
  let component: TodoSixIoFormComponent;
  let fixture: ComponentFixture<TodoSixIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSixIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSixIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
