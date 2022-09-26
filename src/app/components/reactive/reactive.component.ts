import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formGroup:FormGroup;
  constructor( private builder:FormBuilder, private http:DataService) {
    
    this.formGroup = this.builder.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3),
      Validators.maxLength(20)])],
      'username': ['', Validators.required],
      'email': [''],
      'phone': [''],
    })
  }
  formSubmit(user: User){
    this.http.addUser(user).subscribe(response => {
      console.log(response);
    })
  }

  ngOnInit(): void {
  }

}
