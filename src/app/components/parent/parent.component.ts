import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  rmsg:string;
  pnum:number;
  constructor() {
    this.rmsg = "";
    this.pnum = 0;
   }

   getValue(val:string){
    this.rmsg = val;
   }

   getNum(pval:number){
    this.pnum = pval;
   }

  ngOnInit(): void {
  }

}
