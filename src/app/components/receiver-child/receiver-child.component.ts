import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiver-child',
  templateUrl: './receiver-child.component.html',
  styleUrls: ['./receiver-child.component.css']
})
export class ReceiverChildComponent implements OnInit {

  @Input() rNumVal:number;
  constructor() { 
    this.rNumVal = 0;
  }

  ngOnInit(): void {
  }

}
