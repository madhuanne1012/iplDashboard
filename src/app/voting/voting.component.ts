import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder ,Validators} from '@angular/forms';
import {VotingService} from './voting.service'
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  public votingList:any[] = [];
  voteForm:any[]=[];
  amount: string = '';
  profileForm = new FormGroup({
    points: new FormControl(''),
    vote: new FormControl(''),
  });
  constructor(private router:Router,
    private formBuilder: FormBuilder,
    private _votingService:VotingService) { }

    checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

  ngOnInit(): void {
    this._votingService.getvoting().subscribe(data => this.votingList=data)

  }
  selectChangeHandler (event: any) {
    //update the ui
    this.amount = event.target.value;
  }
  goSchedule(){
    this.router.navigate(['schedule']);

  }
  form = new FormGroup({
    gender: new FormControl('', Validators.required)
  });
  onSubmit(){
    console.log(this.voteForm)
  }
  
 
}
