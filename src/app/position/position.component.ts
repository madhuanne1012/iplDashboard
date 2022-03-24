import { Component, OnInit } from '@angular/core';
import { PositionService } from './position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  public result:any[] = [];
  constructor(private _Positionservice:PositionService) { }

  
  ngOnInit(){
    this._Positionservice.getSchedule().subscribe(data => this.result=data);
   }

}
