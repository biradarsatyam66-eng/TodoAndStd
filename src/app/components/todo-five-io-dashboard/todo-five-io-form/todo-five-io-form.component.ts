import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todo.interface';
import { SnackbarService } from 'src/app/servises/snackbar.service';

@Component({
  selector: 'app-todo-five-io-form',
  templateUrl: './todo-five-io-form.component.html',
  styleUrls: ['./todo-five-io-form.component.scss']
})
export class TodoFiveIoFormComponent implements OnInit,OnChanges {

  @ViewChild('todoform') todoform !: NgForm
  @Output() emitnewobj = new EventEmitter<Itodo>()
  @Input() EditObj !: Itodo
  @Output() emitupdate = new EventEmitter<Itodo>()

  isinEditMode:Boolean = false
  Invalid:Boolean = false
  editid!:string

  constructor(private _snackbar:SnackbarService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['EditObj']['currentValue']){
        this.isinEditMode = true
        this.todoform.form.patchValue(changes['EditObj']['currentValue'])
        this.editid = this.EditObj.todoid
      }
  }

  ngOnInit(): void {
  }

  onAddTodo(){
    if(this.todoform.valid){
      this.Invalid = false

      let newobj = {...this.todoform.value,todoid:Date.now().toString()}
      this.emitnewobj.emit(newobj)
      this.todoform.reset()
      this._snackbar.onsnackbarshow('NEW TODO ADDED SUCCESSFULLY !!!!')
    }else{
      this.Invalid = true
    }
  }

  onupdate(){
    if(this.todoform.valid){
      this.Invalid = false

      let updateobj = {...this.todoform.value,todoid:this.editid}
      this.emitupdate.emit(updateobj)
      this.todoform.reset()
      this.isinEditMode = false
      this._snackbar.onsnackbarshow('TODO UPDATED SUCCESSFULLY !!!!')

    }else{
      this.Invalid = true
    }
  }
}
