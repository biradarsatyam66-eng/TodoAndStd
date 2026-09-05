import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-six-io-list',
  templateUrl: './todo-six-io-list.component.html',
  styleUrls: ['./todo-six-io-list.component.scss']
})
export class TodoSixIoListComponent implements OnInit {

  @Input() gettodoinfo !: Itodo[]
  @Output() emiteditobj : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Output() emitdeleteobj : EventEmitter<string> = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }

  onEdit(todo:Itodo){
    this.emiteditobj.emit(todo)
  }

  ondelete(todoid:string){
    this.emitdeleteobj.emit(todoid)
  }

}
