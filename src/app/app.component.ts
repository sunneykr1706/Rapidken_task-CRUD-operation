import { Component, Output,EventEmitter } from '@angular/core';
import { EmployeeComponent } from './layouts/employee/employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() newItem = new EventEmitter();

  constructor(){this.newItem.emit(localStorage.getItem("login"))}

  title = 'rapidken_task';
  emp:any;

  onLoad(load:any){
    console.log(load)
  }
}
