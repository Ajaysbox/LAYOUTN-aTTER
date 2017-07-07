import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Account} from '../shared/account-model'

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
@ViewChild('account')  accountRef:ElementRef;
@ViewChild('status') accReference:ElementRef;
//@ViewChild('ingInputType')ingInputTypeRef:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  addAccount(){
    let accountVal = this.accountRef.nativeElement.value;
    let accTypeRef = this.accReference.nativeElement.value
    let accountAdded = new Account(accountVal,accTypeRef)
    console.log(accountVal+" "+accTypeRef);
  }
}
