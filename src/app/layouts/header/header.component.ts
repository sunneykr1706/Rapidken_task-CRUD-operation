import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  employeDetails=[];
  // showing:boolean=false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  getEmployeDetails(emp){
    console.log("jfdjklf",emp)
    this.employeDetails=emp
  }

  searchEmployelist(){
    console.log(this.employeDetails);
  }

}
