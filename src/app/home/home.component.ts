import { Component, OnInit } from '@angular/core';
import { DataService }  from '../data.service';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../alert.service';
import { error } from '@angular/compiler/src/util';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   loginForms = new FormGroup({
    email: new FormControl(),
    password: new FormControl()});
    loading: boolean | undefined;

  constructor(public dataService : DataService,
    private _auth:AuthService,
    private alertService: AlertService) { }

    

    ngOnInit() {
      this.loginForms = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      });
   }
   get f() { return this.loginForms.controls; }

   onSubmit(form:FormGroup){
      this.dataService.login(this.loginForms.value, this.loginForms.value)
      .pipe(first())
      .subscribe({
          next: () => {
              // get return url from query parameters or default to home page
            //        this.router.navigateByUrl(returnUrl);
          },
          error: (error: string) => {
            this.alertService.error(error);
            this.loading = false;
        }
      });
      //THIS BLOCK COMES INSIDE LOGIN SUCCSESS--START
     const responseFromLoginSuccess = {email: this.loginForms.value.email, user_id: 10} //This informations will come from login response
     localStorage.setItem('user_email',responseFromLoginSuccess.email)
     localStorage.setItem('user_id', responseFromLoginSuccess.user_id.toString());
     window.location.href = '/schedule'
      //THIS BLOCK COMES INSIDE LOGIN SUCCSESS--END
      
      // this._auth.login(form.value.email,form.value.password).subscribe.
     
  }

}