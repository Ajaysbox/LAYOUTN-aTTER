import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountsService } from "app/account.service";
import { LoggingService } from "app/logging.service";

@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    AccountListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsService,LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
