import { Component, OnInit } from '@angular/core';
import { StdArr } from 'src/app/const/std';
import { Istd } from 'src/app/model/std.interface';
import { SnackbarService } from 'src/app/servises/snackbar.service';

@Component({
  selector: 'app-std-four-io-dashboard',
  templateUrl: './std-four-io-dashboard.component.html',
  styleUrls: ['./std-four-io-dashboard.component.scss']
})
export class StdFourIoDashboardComponent implements OnInit {


  stdarr : Istd[] = []
  editobj !: Istd

  constructor(private _snackbar:SnackbarService) { }

  ngOnInit(): void {
    this.stdarr = StdArr
  }

  getnewobj(std:Istd){
    this.stdarr.unshift(std)
  }

  geteditobj(std:Istd){
    this.editobj = std
  }

  getupdateobj(std:Istd){
    let getindex = this.stdarr.findIndex(i=>i.stdId === std.stdId)
    this.stdarr[getindex] = std
  }

  getdeleteobj(stdid:string){
    let getindex = this.stdarr.findIndex(i=>i.stdId === stdid)
    this.stdarr.splice(getindex,1)
    this._snackbar.onsnackbarshow('STD DELETED SUCCESSFULLY!!!')
  }
}
