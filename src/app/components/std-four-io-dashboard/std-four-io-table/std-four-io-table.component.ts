import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-std-four-io-table',
  templateUrl: './std-four-io-table.component.html',
  styleUrls: ['./std-four-io-table.component.scss']
})
export class StdFourIoTableComponent implements OnInit {

  @Output() emiteditobj = new EventEmitter<Istd>()
  @Input() getstdinfo !: Istd[]
  @Output() emitdeleteobj = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }

  onedit(std:Istd){
    this.emiteditobj.emit(std)
  }


  ondelete(stdid:string){
    this.emitdeleteobj.emit(stdid)
  }
}
