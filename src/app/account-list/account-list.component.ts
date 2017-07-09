import { Component, OnInit, Input } from '@angular/core';
import {Account} from '../shared/account-model'
import { LoggingService } from "app/logging.service";
import { AccountsService } from "app/account.service";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers:[LoggingService]
})
export class AccountListComponent implements OnInit {
  @Input() accList:Account;
  @Input() index:number;
  //@Output() setStatus = new EventEmitter<{id:number,newStatus:string}>()
  constructor(private loggingService:LoggingService,private accountService:AccountsService) { }

  ngOnInit() {
  }
  setAccStatus(status:string){
    this.accountService.updateStatus({id:this.index,status:status})
   //-- this.setStatus.emit({id:this.index,newStatus:status});
    this.loggingService.logStatusChange("status changed to "+status)
   // console.log("status changed to "+status);
  }
}
