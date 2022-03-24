import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_id');
    setTimeout(() => {
      window.location.href = '/home';
    },1000)
  }

}
