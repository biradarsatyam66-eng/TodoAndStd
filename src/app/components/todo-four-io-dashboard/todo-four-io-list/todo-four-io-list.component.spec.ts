import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFourIoListComponent } from './todo-four-io-list.component';

describe('TodoFourIoListComponent', () => {
  let component: TodoFourIoListComponent;
  let fixture: ComponentFixture<TodoFourIoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFourIoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFourIoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
