import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User;
  users: User[];
  isLoading: boolean;
  constructor(private http: DataService, private route: ActivatedRoute) {
    this.users = [];
    this.user = {};
    this.isLoading = true;
  }

  ngOnInit(): void {

    let id = this.route.snapshot.params?.['id'];

    this.http.getUserById(id).subscribe(response => {
      this.user = response;
    })

    this.http.getUsers().subscribe(response => {
      this.users = response;
      this.isLoading = false;
      console.log(this.users);
    });

  }

}
