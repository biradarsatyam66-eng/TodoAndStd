import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-std-four-io-form',
  templateUrl: './std-four-io-form.component.html',
  styleUrls: ['./std-four-io-form.component.scss']
})
export class StdFourIoFormComponent implements OnInit {

  @ViewChild('stdform') stdform !: NgForm
  @Output() emitnewobj : EventEmitter<Istd> = new EventEmitter<Istd>()

  isinEditMode : boolean = false
  inValid : Boolean = false

  constructor() { }

  ngOnInit(): void {
  }


  onAddstd(){
    if(this.stdform.valid){
      this.inValid = false

      let newobj = {...this.stdform.value, stdId :Date.now().toString()}
      this.emitnewobj.emit(newobj)
      this.stdform.reset()
    }else{
      this.inValid = true
    }
  }
}
