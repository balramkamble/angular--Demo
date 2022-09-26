import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  sayHello(name:string):string{
    return ' Hello ' + name;
  }
  
}
