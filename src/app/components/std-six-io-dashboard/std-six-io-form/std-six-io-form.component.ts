import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/std.interface';
import { SnackbarService } from 'src/app/servises/snackbar.service';

@Component({
  selector: 'app-std-six-io-form',
  templateUrl: './std-six-io-form.component.html',
  styleUrls: ['./std-six-io-form.component.scss']
})
export class StdSixIoFormComponent implements OnInit,OnChanges {

  @ViewChild('stdForm') stdForm !: NgForm
  @Output() emitnewobj = new EventEmitter<Istd>()
  @Input() EditObj !: Istd
  @Output() emitupdateobj = new EventEmitter<Istd>()

  isinEditMode :Boolean = false
  isInvalid:boolean = false
  editid!:string

  constructor(private _snackbar:SnackbarService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['EditObj']['currentValue']){
        this.isinEditMode = true
        this.stdForm.form.patchValue(changes['EditObj']['currentValue'])
        this.editid = this.EditObj.stdId
      }
  }

  ngOnInit(): void {
  }

  onAddStd(){
    if(this.stdForm.valid){
      this.isInvalid = false

      let newobj = {...this.stdForm.value,stdId:Date.now().toString()}
      this.emitnewobj.emit(newobj)
      this.stdForm.reset()
      this._snackbar.onsnackbarshow('NEW STD ADDED SUCCESSFULLY !!!')
    }else{
      this.isInvalid = true
    }
  }

  onupdate(){
    if(this.stdForm.valid){
      this.isInvalid = false

      let updateobj = {...this.stdForm.value,stdId:this.editid}
      this.emitupdateobj.emit(updateobj)
      this.stdForm.reset()
      this.isinEditMode = false
      this._snackbar.onsnackbarshow('STD UPDATED SUCCESSFULLY !!!')
    }else{
      this.isInvalid = true
    }

  }

}
