import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sender-child',
  templateUrl: './sender-child.component.html',
  styleUrls: ['./sender-child.component.css']
})
export class SenderChildComponent implements OnInit {

  @Output() send: EventEmitter<string>;
  @Output() sendValtoParent: EventEmitter<number>;
  msg:string;

  sendValNum:number;
  constructor() {
    this.msg = "this is a message from sender child to parent component";
    this.send = new EventEmitter<string>();

    this.sendValNum=0;
    this.sendValtoParent = new EventEmitter<number>();
   }

   btnClick(){
    this.send.emit(this.msg);
   }

   sendData(){
    this.sendValtoParent.emit(this.sendValNum ++);
   }

  ngOnInit(): void {
  }

}
