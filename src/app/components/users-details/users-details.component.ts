import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  allUsers: User[];
  singleRecord:any;
  constructor(private httpData:DataService) { 
    this.allUsers = [];
    this.singleRecord = [];
  }

  ngOnInit(): void {
    this.httpData.getUsers().subscribe(response => {
     // this.allUsers = response;
      this.singleRecord = response.find( ele => ele.id == 5);
      console.log(this.singleRecord);
    })

   
  }

}
