import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFiveIoListComponent } from './todo-five-io-list.component';

describe('TodoFiveIoListComponent', () => {
  let component: TodoFiveIoListComponent;
  let fixture: ComponentFixture<TodoFiveIoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFiveIoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFiveIoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
