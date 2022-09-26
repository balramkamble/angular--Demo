import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-by-bk-child-second',
  templateUrl: './by-bk-child-second.component.html',
  styleUrls: ['./by-bk-child-second.component.css']
})
export class ByBKChildSecondComponent implements OnInit {

  emp: User[];

  semp: [];
  @Output() oAllEmp: EventEmitter<string>;
  constructor(private apiData: DataService) {
    this.emp = [];

    this.semp = [];
    this.oAllEmp = new EventEmitter<string>();

  }



  ngOnInit(): void {
    this.apiData.getUsers().subscribe(response => {
      this.emp = response;
      console.log(this.emp = response)
    })
  }

  sDdataSend(emp: any) {
    this.semp = emp;
    console.log(this.semp = emp)

    this.oAllEmp.emit(emp);
    console.log(this.oAllEmp.emit(emp))
  }

}
