import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() name:string;
  @Input() mobile:string;
  @Input() email:string;
  @Input() gender:string;
  @Input() contacted:boolean;
  title:string;
  newAddCls:string;
  newTextCls:string;




  

  constructor() { 
    this.name = "";
    this.mobile = "";
    this.email = "";
    this.gender = "";
    this.title= "";
    this.contacted = false;
    this.newAddCls="";
    this.newTextCls="";
  }

  changeContactStatus(){
    this.contacted = ! this.contacted;
    console.log(this.name, this.contacted);

    this.newTextCls = this.contacted === true ? "red" : "blue";

  }

  ngOnChanges(){
    this.title = this.gender === "M" ? "Mr." : "Ms.";
    this.newAddCls = this.gender === "M" ? "blueColor" : "redColor";
  }
  ngOnInit(): void {
  }

}
