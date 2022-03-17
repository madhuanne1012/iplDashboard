import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleComponent } from './schedule/schedule.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_KEY = 'e40d07f00b094602953cc3bf8537477e';
  private _url:string="/assest/Schedule.json";
  public schedulelist=[];


  constructor(private httpClient: HttpClient) { }
  // ngOnInit(): void {
  //   this._ScheduleComponent.getSchedule().subscribe(data => this.schedulelist=data)
  // }


  getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/everything?q=DevOps&sortBy=popularity&apiKey=${this.API_KEY}`);
  }
}