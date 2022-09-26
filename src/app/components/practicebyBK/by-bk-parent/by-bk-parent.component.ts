import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-by-bk-parent',
  templateUrl: './by-bk-parent.component.html',
  styleUrls: ['./by-bk-parent.component.css']
})
export class ByBKParentComponent implements OnInit {


  uList: User[];
  rData: User[];

  constructor(private http: DataService) {
    this.uList = [];
    this.rData = [];
  }

  ngOnInit(): void {
    this.http.getUsers().subscribe(response => {
      this.uList = response;
      console.log(this.uList = response);



    })


  }

  getEdata(aVal: any) {
    this.rData = aVal;
  }


}
