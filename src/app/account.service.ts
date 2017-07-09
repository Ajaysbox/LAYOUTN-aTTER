import { Account } from './shared/account-model'
//import {Account} from './shared/account-model'
export class AccountsService{
    accountList:Account[] = [
    {accName:"name",accType:"type"},
    {accName:"name",accType:"type"},
    {accName:"name",accType:"type"}
    ];

    addAccount(acc:Account){
        this.accountList.push(acc);
        console.log(acc);
    };
    updateStatus(updateInfo:{id:number,status:string}){
        this.accountList[updateInfo.id].accType = updateInfo.status;
    
    }
}