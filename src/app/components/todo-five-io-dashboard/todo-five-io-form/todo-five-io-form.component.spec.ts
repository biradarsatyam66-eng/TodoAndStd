import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFiveIoFormComponent } from './todo-five-io-form.component';

describe('TodoFiveIoFormComponent', () => {
  let component: TodoFiveIoFormComponent;
  let fixture: ComponentFixture<TodoFiveIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFiveIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFiveIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
