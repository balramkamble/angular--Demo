import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  firstName:string;
  lastName:string;
  salary:number;
  emp:Employee;
  isActive:boolean;

  imgPathF:string;
  imgPathS:string;

  myStatus:boolean;



    constructor(){
    this.title = 'My First Angular App';
    this.firstName = "Baliram";
    this.lastName = "Kamble";
    this.salary = 50000;

    this.isActive = true;
    this.imgPathF = "assets/images/cg-logo1.png";
    this.imgPathS = "assets/images/cg-logo2.jpg";
 
    this.myStatus=false;



    this.emp = {
      name: "baliram kamble",
      age: 32,
      designation: 'Manager',
      salary: 50000
    }

  }


  fullName():string{
    return `${this.firstName} ${this.lastName}`;
  }

  getEmployeeDetails():string{
    return `Name: ${this.emp.name},  Designation: ${this.emp.designation},  Salary: ${this.emp.salary}`
  }

  btnClick(){
    //this.imgPathF = "assets/images/cg-logo2.jpg";
    this.myStatus = !this.myStatus;
  }


  ChangeClr(){
    this.myStatus = !this.myStatus;
  }


  
}
