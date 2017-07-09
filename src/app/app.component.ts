import { Component, OnInit } from '@angular/core';
import {Account} from './shared/account-model';
import{AccountsService} from './account.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})
export class AppComponent implements OnInit {
   accounts:Account[] = [];

   constructor(private accountsService:AccountsService){

   }

  ngOnInit(){
    this.accounts = this.accountsService.accountList;
  }
  //  newAccountAdded(accAdd:Account){
  //    console.log("new acc added from the root comp"+accAdd.accName+"/"+accAdd.accType)
  //    this.accountList.push(accAdd);
  //  }
  //  onStatusChange(updateInfo:{id:number,newStatus:string}){
  //   this.accountList[updateInfo.id].accType = updateInfo.newStatus;
  //  }
  title = 'app';
}
