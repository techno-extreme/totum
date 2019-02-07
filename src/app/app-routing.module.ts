import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { PackagesComponent } from './components/packages/packages.component';
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
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'account', component: AccountHomeComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'account-settings-1', component: AccountSettings1Component },
  { path: 'account-settings-2', component: AccountSettings2Component },
  { path: 'account-settings-3', component: AccountSettings3Component },
  { path: 'account-settings-4', component: AccountSettings4Component },
  { path: 'account-settings-5', component: AccountSettings5Component },
  { path: 'account-settings-6', component: AccountSettings6Component },
  { path: 'account-settings-7', component: AccountSettings7Component },
  { path: 'account-settings-8', component: AccountSettings8Component },
  { path: 'account-settings-9', component: AccountSettings9Component },
  {path: 'company-dashboard', component: CompanyDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
