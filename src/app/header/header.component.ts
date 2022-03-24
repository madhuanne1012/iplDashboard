import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isLoggedin: boolean = false;

  ngOnInit(): void {
    this.isLoggedin = localStorage.getItem('user_id') ? true : false;
  }

}
