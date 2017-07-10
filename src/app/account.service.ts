import { Account } from './shared/account-model'
import { LoggingService } from "app/logging.service";
import { Injectable, EventEmitter } from "@angular/core";

//import {Account} from './shared/account-model'
@Injectable()
export class AccountsService{
    accountList:Account[] = [
    {accName:"name",accType:"type"},
    {accName:"name",accType:"type"},
    {accName:"name",accType:"type"}
    ];
    statusUpdated = new EventEmitter<string>();
constructor(private loggingService:LoggingService){

}
    addAccount(acc:Account){
        this.accountList.push(acc);
        this.loggingService.logStatusChange("account added "+ acc.accName)
        //console.log(acc);

    };
    updateStatus(updateInfo:{id:number,status:string}){
      this.accountList[updateInfo.id].accType = updateInfo.status;
     
      this.loggingService.logStatusChange("status changed  "+ updateInfo.status)
    }
}