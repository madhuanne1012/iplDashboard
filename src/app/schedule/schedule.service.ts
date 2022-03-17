import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ScheduleInterface } from "./schedule";
import { Observable } from "rxjs";
import { ScheduleComponent } from "./schedule.component";


@Injectable({providedIn :'root'})
export class ScheduleService{
 private _url="../assets/Schedule.json";
  public schedulelist=[];

  constructor(private http:HttpClient) { }

  getSchedule():Observable<ScheduleInterface[]>{
    return this.http.get<ScheduleInterface[]>(this._url);
   }
}