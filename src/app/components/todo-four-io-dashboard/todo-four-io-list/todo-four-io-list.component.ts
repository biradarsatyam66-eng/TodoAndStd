import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-four-io-list',
  templateUrl: './todo-four-io-list.component.html',
  styleUrls: ['./todo-four-io-list.component.scss']
})
export class TodoFourIoListComponent implements OnInit {

  @Input() gettodoinfo !: Itodo[]
  @Output() emiteditobj = new EventEmitter<Itodo>()
  @Output() emitdeleteobj = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onedit(todo:Itodo){
    this.emiteditobj.emit(todo)
  }

  ondelete(todoid:string){
    this.emitdeleteobj.emit(todoid)
  }

}
