import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  employeDetails:any=[];
  userLoggedIn: boolean;

  constructor(public router: Router, private service: AppService) {
    this.service.isUserLoggedIn.subscribe(value=>{
      this.userLoggedIn = value;
    })
    console.log("jdjkshdkasjd",this.userLoggedIn)
   }

  ngOnInit(): void {
  }

  getEmployeDetails(emp){
    console.log("jfdjklf",emp)
    this.employeDetails=emp
  }

  searchEmployelist(items){
    this.employeDetails =JSON.parse(localStorage.getItem("Employee"))
    this.employeDetails = this.employeDetails.filter(item=>item.name.toLowerCase().includes(items.toLowerCase()))
    console.log("detailssss",this.employeDetails);
    this.service.data.next(this.employeDetails);

  //   this.router.navigateByUrl('/emp', { skipLocationChange: false }).then(() => {
  //     this.router.navigate(['/emp']);
  // });
  }

  getValue(cmp){
    console.log(cmp)
  }

}
