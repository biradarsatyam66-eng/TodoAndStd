import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/std.interface';
import { SnackbarService } from 'src/app/servises/snackbar.service';

@Component({
  selector: 'app-std-five-io-form',
  templateUrl: './std-five-io-form.component.html',
  styleUrls: ['./std-five-io-form.component.scss']
})
export class StdFiveIoFormComponent implements OnInit,OnChanges {

  @ViewChild('stdform') stdform !: NgForm
  @Output() emitnewobj = new EventEmitter<Istd>()
  @Input() EditObj !: Istd
  @Output() emitupdateobj = new EventEmitter<Istd>()

  isInEditMode : Boolean = false
  isInvalid : Boolean = false
  editid!:string

  constructor(private _snackbar:SnackbarService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['EditObj']['currentValue']){
        this.isInEditMode = true
        this.stdform.form.patchValue(changes['EditObj']['currentValue'])
        this.editid = this.EditObj.stdId
      }
  }


  ngOnInit(): void {
  }

  onAddstd(){
    if(this.stdform.valid){
      this.isInvalid = false

      let newobj = {...this.stdform.value,stdId:Date.now().toString()}
      this.emitnewobj.emit(newobj)
      this.stdform.reset()
      this._snackbar.onsnackbarshow('NEW STD ADDED SUCCESSFULLY !!!!')
    }else{
      this.isInvalid = true
    }
  }

  onupdate(){
    if(this.stdform.valid){
      this.isInvalid = false

      let updateobj = {...this.stdform.value,stdId:this.editid}
      this.emitupdateobj.emit(updateobj)
      this.isInEditMode = false
      this.stdform.reset()
      this._snackbar.onsnackbarshow('STD UPDATED SUCCESSFULLY !!!!')
    }else{
      this.isInvalid = true
    }
  }

}
