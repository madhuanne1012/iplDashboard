import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VotingInterface } from "./voting";
import { Observable } from "rxjs";



@Injectable({providedIn :'root'})
export class VotingService{
 private _url="../assets/voting.json";
  public votingList=[];

  constructor(private http:HttpClient) { }

  getvoting():Observable<VotingInterface[]>{
    return this.http.get<VotingInterface[]>(this._url);
   }
}