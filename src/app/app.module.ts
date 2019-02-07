import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AccountHomeComponent } from './components/account-home/account-home.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { AccountSettings1Component } from './components/account-settings1/account-settings1.component';
import { AccountSettings2Component } from './components/account-settings2/account-settings2.component';
import { AccountSettings3Component } from './components/account-settings3/account-settings3.component';
import { AccountSettings4Component } from './components/account-settings4/account-settings4.component';
import { AccountSettings5Component } from './components/account-settings5/account-settings5.component';
import { AccountSettings6Component } from './components/account-settings6/account-settings6.component';
import { AccountSettings7Component } from './components/account-settings7/account-settings7.component';
import { AccountSettings8Component } from './components/account-settings8/account-settings8.component';
import { AccountSettings9Component } from './components/account-settings9/account-settings9.component';
import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccountHomeComponent,
    AccountSettingsComponent,
    AccountSettings1Component,
    AccountSettings2Component,
    AccountSettings3Component,
    AccountSettings4Component,
    AccountSettings5Component,
    AccountSettings6Component,
    AccountSettings7Component,
    AccountSettings8Component,
    AccountSettings9Component,
    HomeComponent,
    PackagesComponent,
    LoginComponent,
    CompanyDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
