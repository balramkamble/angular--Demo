import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //service:DemoService
  msg: string = '';
  user: User;
  isLoading: boolean;
  constructor(private service: DemoService, private http: DataService, private route: ActivatedRoute) {
    //this.service = new DemoService();
    this.user = {};
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.msg = this.service.sayHello('Baliram Kamble');

    let id = this.route.snapshot.params?.['id'];

    this.http.getUserById(id).subscribe(response => {
      this.user = response;
      this.isLoading = false
    })

  }

}
