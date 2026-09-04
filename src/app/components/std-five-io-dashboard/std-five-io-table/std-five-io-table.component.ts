import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-std-five-io-table',
  templateUrl: './std-five-io-table.component.html',
  styleUrls: ['./std-five-io-table.component.scss']
})
export class StdFiveIoTableComponent implements OnInit {

  @Input() getstdinfo !: Istd[]
  @Output() emiteditobj = new EventEmitter<Istd>()
  @Output() emitDeleteobj = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onedit(std:Istd){
    this.emiteditobj.emit(std)
  }

  ondelete(stdid:string){
    this.emitDeleteobj.emit(stdid)
  }

}
