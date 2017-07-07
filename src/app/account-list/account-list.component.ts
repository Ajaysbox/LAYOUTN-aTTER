import { Component, OnInit } from '@angular/core';
import {Account} from '../shared/account-model'

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accountList:Account[]=[{accName:"name",accType:"type"},{accName:"name",accType:"type"},{accName:"name",accType:"type"}];
  constructor() { }

  ngOnInit() {
  }

}
