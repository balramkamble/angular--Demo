import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  msg:string;
  names:string[];

  constructor() {
    this.msg = "";
    this.names = ['Baliram', 'Aradhya', 'Soham', 'Basanti'];
   }

   setMessage(){
    this.msg= "this is a new message";
   }

  ngOnInit(): void {
  }

}
