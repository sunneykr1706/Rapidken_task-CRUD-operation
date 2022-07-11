import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './layouts/employee/employee.component';
import { ErrorComponent } from './layouts/error/error.component';
import { FooterComponent } from './layouts/footer/footer.component';
//import { HeaderComponent } from './layouts/header/header.component';
import { LoginComponent } from './layouts/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'error', component: ErrorComponent},
  {path:'emp', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
