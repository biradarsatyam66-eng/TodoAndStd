import { Component, Input, OnInit } from '@angular/core';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-std-four-io-table',
  templateUrl: './std-four-io-table.component.html',
  styleUrls: ['./std-four-io-table.component.scss']
})
export class StdFourIoTableComponent implements OnInit {

  @Input() getstdinfo !: Istd[]


  constructor() { }

  ngOnInit(): void {
  }

}
