import { Component, OnInit } from '@angular/core';
import { todoArr } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo.interface';
import { SnackbarService } from 'src/app/servises/snackbar.service';

@Component({
  selector: 'app-todo-six-io-dashboard',
  templateUrl: './todo-six-io-dashboard.component.html',
  styleUrls: ['./todo-six-io-dashboard.component.scss']
})
export class TodoSixIoDashboardComponent implements OnInit {


  todoarr:Itodo[] = []
  editobj !:Itodo

  constructor(private _snackbar:SnackbarService) { }

  ngOnInit(): void {
    this.todoarr = todoArr
  }

  getnewobj(todo:Itodo){
    this.todoarr.unshift(todo)
  }

  geteditobj(todo:Itodo){
    this.editobj = todo
  }

  getupdateobj(todo:Itodo){
    let getindex = this.todoarr.findIndex(i=>i.todoid === todo.todoid)
    this.todoarr[getindex] = todo
  }

  getdeleteobj(todoid:string){
    let getindex = this.todoarr.findIndex(i=>i.todoid === todoid)
    this.todoarr.splice(getindex,1)
    this._snackbar.onsnackbarshow('TODO DELETED SUCCESSFULLY !!!!')
  }

}
