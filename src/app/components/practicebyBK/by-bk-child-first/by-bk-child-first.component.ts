import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-by-bk-child-first',
  templateUrl: './by-bk-child-first.component.html',
  styleUrls: ['./by-bk-child-first.component.css']
})
export class ByBKChildFirstComponent implements OnInit {

  @Input() allUlist: User[];

  constructor() {
    this.allUlist = [];
  }

  ngOnInit(): void {
  }

}
