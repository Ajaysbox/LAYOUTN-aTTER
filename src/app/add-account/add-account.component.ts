import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Account} from '../shared/account-model';
import {LoggingService} from '../logging.service';
import { AccountsService } from "app/account.service";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
  providers:[LoggingService]
})
export class AddAccountComponent implements OnInit {
@ViewChild('account')  accountRef:ElementRef;
@ViewChild('status') accReference:ElementRef;
//--@Output() accountAdded = new EventEmitter<Account>()
//@ViewChild('ingInputType')ingInputTypeRef:ElementRef;
  constructor(private logService:LoggingService,
  private accountService:AccountsService) { }

  ngOnInit() {
  }
  addAccount(){
    let accountVal = this.accountRef.nativeElement.value;
    let accTypeRef = this.accReference.nativeElement.value;
    let accountAdded = new Account(accountVal,accTypeRef);
    this.accountService.addAccount(accountAdded);
   // --this.accountAdded.emit(accountAdded);
    const service = new LoggingService();
    // this is the manual method...//service.logStatusChange(accountVal+" "+accTypeRef);
    this.logService.logStatusChange(accountVal+" "+accTypeRef)
  }
}
