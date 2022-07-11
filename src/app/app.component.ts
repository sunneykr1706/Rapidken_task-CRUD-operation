import { Component } from '@angular/core';
import { EmployeeComponent } from './layouts/employee/employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rapidken_task';
  emp:any;
}
