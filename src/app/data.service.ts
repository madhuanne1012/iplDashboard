import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleComponent } from './schedule/schedule.component';
import {VotingInterface} from './voting/voting';
//import { User } from './registration/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_KEY = '';
  private _url:string="/assest/Schedule.json";
  public schedulelist=[];
  private baseurl="https://localhost:8080/fanatacyipl/api/auth/signin";


  constructor(private httpClient: HttpClient) { }
  


  
  register(registartionData: VotingInterface) {

    console.log("registartionData",registartionData);
    return this.httpClient.post(`/fanatacyipl/api/auth/signup`, registartionData);
}
login(email: any, password: any) {
return this.httpClient.get(`${this.baseurl}`)
  //return this.httpClient.post<any>(`${this.baseurl}`, { email, password })
    //  .pipe(map(user => {
          
      //    localStorage.setItem('user', JSON.stringify(user));
         // this.userSubject.next(user);
     //     return user;
     // }));
}

// logout() {
//   // remove user from local storage and set current user to null
//   localStorage.removeItem('user');
//   this.userSubject.next(null);
//   this.router.navigate(['/account/login']);
// }

}
