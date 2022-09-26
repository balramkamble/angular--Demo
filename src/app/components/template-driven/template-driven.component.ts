import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor(private http: DataService) { }

  submitForm(user: User){
    console.log('Data', user);
    this.http.addUser(user).subscribe(response => {
      console.log('Response', response)
    })
  }

  log(value:any){
    console.log(value);
  }

  ngOnInit(): void {
  }



}
