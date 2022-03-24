import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PositionInterface } from "./position";
import { Observable } from "rxjs";



@Injectable({providedIn :'root'})
export class PositionService{
 private _url="../assets/position.json";
  public schedulelist=[];

  constructor(private http:HttpClient) { }

  getSchedule():Observable<PositionInterface[]>{
    return this.http.get<PositionInterface[]>(this._url);
   }
}