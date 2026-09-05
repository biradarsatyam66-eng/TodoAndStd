import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-std-six-io-table',
  templateUrl: './std-six-io-table.component.html',
  styleUrls: ['./std-six-io-table.component.scss']
})
export class StdSixIoTableComponent implements OnInit {


  @Input() getstdinfo !: Istd[]
  @Output() emiteditobj = new EventEmitter<Istd>()
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
