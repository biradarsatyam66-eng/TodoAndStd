import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todo.interface';
import { SnackbarService } from 'src/app/servises/snackbar.service';

@Component({
  selector: 'app-todo-four-io-form',
  templateUrl: './todo-four-io-form.component.html',
  styleUrls: ['./todo-four-io-form.component.scss']
})
export class TodoFourIoFormComponent implements OnInit,OnChanges {

  @ViewChild('todoform') todoform !: NgForm
  @Output() emitnewobj = new EventEmitter<Itodo>()
  @Input() EditObj !: Itodo
  @Output() emitupdateonj = new EventEmitter<Itodo>()

  isineditmode :Boolean = false
  isInvalid : Boolean = false

  editid!:string

  constructor(private _snackbar:SnackbarService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['EditObj']['currentValue']){
        this.isineditmode = true
        this.todoform.form.patchValue(changes['EditObj']['currentValue'])
        this.editid = this.EditObj.todoid
      }
  }


  ngOnInit(): void {
  }

  onAddtodo(){
    if(this.todoform.valid){
      this.isInvalid = false

      let newobj = {...this.todoform.value,todoid:Date.now().toString()}
      this.emitnewobj.emit(newobj)
      this.todoform.reset()
      this._snackbar.onsnackbarshow(`NEW TODO WITH ID ${newobj.todoid} IS ADDED SUCCESSFULLY !!!`)
    }else{
      this.isInvalid = true
    }
  } 

  onupdate(){
    if(this.todoform.valid){
      this.isInvalid = false

      let updateobj = {...this.todoform.value,todoid:this.editid}
      this.emitupdateonj.emit(updateobj)
      this.isineditmode = false
      this.todoform.reset()
      this._snackbar.onsnackbarshow(`TODO WITH ID ${this.editid} IS UPDATED SUCCESSFULLY !!!`)
    }else{
      this.isInvalid = true
    }
  }

}
