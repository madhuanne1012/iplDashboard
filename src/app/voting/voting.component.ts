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

  // profileForm = new FormGroup({
  //   points: new FormControl(''),
  //   vote: new FormControl(''),
  // });


  profileForms = new FormGroup({});



  constructor(private router:Router,
    private formBuilder: FormBuilder,
    private _votingService:VotingService) { }

    checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

  ngOnInit(): void {
    this._votingService.getvoting().subscribe(data => { 
      this.votingList = data;
      this.votingList.forEach(match => this.profileForms.addControl(`match_no_${match.SNo}`, new FormGroup(
        {
          points: new FormControl('', Validators.required),
          vote: new FormControl('')
        }
      )));
    })
  }

  selectChangeHandler(event: any) {
    //update the ui
      this.amount = event.target.value;
  }
  
  goSchedule(){
    this.router.navigate(['schedule']);

  }

  onSubmit(form:FormGroup){
    console.log(form.value);
  }

  getimages(imgFor: string) { 
    imgFor = imgFor.toLowerCase()
    switch (imgFor) {
      case 'csk':
        return 'assets/images/csk.png'
        break
      case 'dc':
        return 'assets/images/dc.png'
        break
      case 'gt':
        return 'assets/images/gt.png'
        break
      case 'kkr':
        return 'assets/images/kkr.png'
        break
      case 'lsg':
        return 'assets/images/lsg.png'
        break
      case 'mi':
        return 'assets/images/mi.png'
        break
      case 'pk':
        return 'assets/images/pk.png'
        break
      case 'rcb':
        return 'assets/images/rcb.png'
        break
      case 'rr':
        return 'assets/images/rr.png'
        break
      case 'srh':
        return 'assets/images/srh.png'
        break
      default:
        return 'assets/images/mi.png'
        break
    }
  }
 
}
