import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public data: BehaviorSubject<[]> = new BehaviorSubject<[]>([])
  constructor() { }

  setSearchData(value){
    console.log(value)
    this.data = value
    
  }

  getSearchData(){
    console.log(this.data)
    return this.data
  }
}
