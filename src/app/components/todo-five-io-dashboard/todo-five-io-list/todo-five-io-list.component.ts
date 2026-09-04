import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-five-io-list',
  templateUrl: './todo-five-io-list.component.html',
  styleUrls: ['./todo-five-io-list.component.scss']
})
export class TodoFiveIoListComponent implements OnInit {

  @Input() gettodoinfo !: Itodo[]
  @Output() emiteditobj = new EventEmitter<Itodo>()
  @Output() emitdeleteobj = new EventEmitter<string>()

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
