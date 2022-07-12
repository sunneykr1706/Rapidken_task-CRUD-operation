import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeDetails } from './models/employe';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeForm: FormGroup;
  employeForming: FormGroup;
  listShow: boolean = false;
  cardShow: boolean = false;
  employeDetails: EmployeDetails[] = [];
  index : number;
  p: number = 1
  // @Output() emp = new EventEmitter<any>()

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.employeForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]),
      'position': new FormControl(null, [Validators.required]),
      'about': new FormControl(null, [Validators.required]),
      'joiningdate': new FormControl(null, [Validators.required])
    });
    
    this.employeForming = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]),
      'position': new FormControl(null, [Validators.required]),
      'about': new FormControl(null, [Validators.required]),
      'joiningdate': new FormControl(null, [Validators.required])
    });

    if (localStorage.getItem('Employee')) {
      this.employeDetails = JSON.parse(localStorage.getItem('Employee'));
    }
    
  }

  onSubmit() {
    this.employeDetails.push(this.employeForm.value);
    localStorage.setItem('Employee', JSON.stringify(this.employeDetails))
    // this.emp.emit(this.employeDetails)
    // console.log("object value", this.emp.emit(this.employeDetails));
    // console.log("HHHHHH",this.employeDetails)
    this.employeForm.reset();
  }

  showList() {
    console.log("the list showing button is working fine");
    this.listShow = true;
    this.cardShow = false;
  }

  newEmploye() {
    this.listShow = false;
    this.cardShow = false;
  }

  cardView() {
    this.listShow = false;
    this.cardShow = true;
  }

  removeEmploye(name: string) {
    console.log("Remove data");
    for (let i = 0; i < this.employeDetails.length; i++) {
      if (this.employeDetails[i].name === name) {
        this.employeDetails.splice(i, 1);
      }
    }
  }

  updatemploye(){
    console.log("this is update form");
    this.employeDetails[this.index] = this.employeForming.value
  }

  editEmploye(names){
    this.index = this.employeDetails.findIndex(x=>x.name==names)
    this.employeForming.setValue({
      name:this.employeDetails[this.index].name,
      position:this.employeDetails[this.index].position,
      about:this.employeDetails[this.index].about,
      joiningdate:this.employeDetails[this.index].joiningdate
    })
  }

}
