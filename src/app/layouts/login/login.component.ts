import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin(){
    if (this.loginForm.value.email === 'admin@gmail.com' && this.loginForm.value.password === 'admin@2022') {
      console.log('Yahoo done it');
      this.router.navigateByUrl('');
    } else {
      console.log('email & Password is not correct');
      this.router.navigateByUrl('error');
    }
  }

}
