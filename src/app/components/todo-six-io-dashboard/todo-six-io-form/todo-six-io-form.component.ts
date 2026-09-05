import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todo.interface';
import { SnackbarService } from 'src/app/servises/snackbar.service';

@Component({
  selector: 'app-todo-six-io-form',
  templateUrl: './todo-six-io-form.component.html',
  styleUrls: ['./todo-six-io-form.component.scss']
})
export class TodoSixIoFormComponent implements OnInit,OnChanges {

  @ViewChild('todoform') todoform !: NgForm
  @Output() emitnewobj : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() EditObj !: Itodo
  @Output() emitupdateobj : EventEmitter<Itodo> = new EventEmitter<Itodo>()


  isineditmode:boolean = false
  isinvalid:boolean = false
  editid!:string

  constructor(private _snackbar:SnackbarService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['EditObj']['currentValue']){
        this.isineditmode = true
        this.todoform.form.patchValue(changes['EditObj']['currentValue'])
        this.editid =this.EditObj.todoid
      }
  }


  ngOnInit(): void {
  }

  onAddtodo(){
    if(this.todoform.valid){
      this.isinvalid = false

      let newobj = {...this.todoform.value,todoid:Date.now().toString()}
      this.emitnewobj.emit(newobj)
      this.todoform.reset()
      this._snackbar.onsnackbarshow('NEW TODO ADDED SUCCESSFULLY!!!')
    }else{
      this.isinvalid = true
    }
  }

  onupdate(){
    if(this.todoform.valid){
      this.isinvalid = false

      let updateobj = {...this.todoform.value,todoid:this.editid}
      this.emitupdateobj.emit(updateobj)
      this.todoform.reset()
      this.isineditmode = false
      this._snackbar.onsnackbarshow('TODO UPDATED SUCCESSFULLY!!!')
    }else{
      this.isinvalid = true
    }
  }

}
