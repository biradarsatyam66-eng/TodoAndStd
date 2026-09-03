import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFourIoFormComponent } from './todo-four-io-form.component';

describe('TodoFourIoFormComponent', () => {
  let component: TodoFourIoFormComponent;
  let fixture: ComponentFixture<TodoFourIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFourIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFourIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
