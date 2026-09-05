import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSixIoListComponent } from './todo-six-io-list.component';

describe('TodoSixIoListComponent', () => {
  let component: TodoSixIoListComponent;
  let fixture: ComponentFixture<TodoSixIoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSixIoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSixIoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
