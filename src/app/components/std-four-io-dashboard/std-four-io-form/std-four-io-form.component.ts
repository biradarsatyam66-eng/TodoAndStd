import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/std.interface';
import { SnackbarService } from 'src/app/servises/snackbar.service';

@Component({
  selector: 'app-std-four-io-form',
  templateUrl: './std-four-io-form.component.html',
  styleUrls: ['./std-four-io-form.component.scss']
})
export class StdFourIoFormComponent implements OnInit,OnChanges {

  @ViewChild('stdform') stdform !: NgForm
  @Output() emitnewobj : EventEmitter<Istd> = new EventEmitter<Istd>()
  @Input() EditObj !: Istd
  @Output() emitupdateobj = new EventEmitter<Istd>()

  isinEditMode : boolean = false
  inValid : Boolean = false
  editid!:string

  constructor(private _snackbar:SnackbarService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['EditObj']['currentValue']){
        this.inValid = false
        this.stdform.form.patchValue(changes['EditObj']['currentValue'])
        this.isinEditMode = true
        this.editid = this.EditObj.stdId
      }
  }

  ngOnInit(): void {
  }


  onAddstd(){
    if(this.stdform.valid){
      this.inValid = false

      let newobj = {...this.stdform.value, stdId :Date.now().toString()}
      this.emitnewobj.emit(newobj)
      this.stdform.reset()
      this._snackbar.onsnackbarshow('NEW STD ADDED SUCCESSFULLY!!!')
    }else{
      this.inValid = true
    }
  }

  onupdate(){
    if(this.stdform.valid){
      this.inValid = false

      let updateobj = {...this.stdform.value,stdId:this.editid}
      this.emitupdateobj.emit(updateobj)
      this.isinEditMode = false
      this.stdform.reset()
      this._snackbar.onsnackbarshow('STD UPDATED SUCCESSFULLY!!!')
    }else{
      this.inValid = true
    }
  }
}
