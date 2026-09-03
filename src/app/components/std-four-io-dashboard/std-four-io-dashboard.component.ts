import { Component, OnInit } from '@angular/core';
import { StdArr } from 'src/app/const/std';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-std-four-io-dashboard',
  templateUrl: './std-four-io-dashboard.component.html',
  styleUrls: ['./std-four-io-dashboard.component.scss']
})
export class StdFourIoDashboardComponent implements OnInit {


  stdarr : Istd[] = []

  constructor() { }

  ngOnInit(): void {
    this.stdarr = StdArr
  }

  getnewobj(std:Istd){
    this.stdarr.unshift(std)
  }

}
