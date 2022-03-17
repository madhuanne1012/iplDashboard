import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScheduleInterface } from './schedule';
import { Observable } from 'rxjs/';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  //private _url:string="/assest/Schedule.json";
  public result:any[] = [];

  constructor(private _Scheduleservice:ScheduleService) { }

  ngOnInit(){
   this._Scheduleservice.getSchedule().subscribe(data => this.result=data);
  }

  // getSchedule():Observable<Schedule[]>{
  //   return this.http.get<Schedule[]>(this._url);
  // }
}
