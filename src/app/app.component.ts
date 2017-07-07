import { Component } from '@angular/core';
import {Account} from './shared/account-model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accountList:Account[]=[{accName:"name",accType:"type"},{accName:"name",accType:"type"},{accName:"name",accType:"type"}];
 
  title = 'app';
}
