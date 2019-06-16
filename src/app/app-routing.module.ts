import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {InvoiceListComponent} from './invoice/invoice-list/invoice-list.component';
import {InvoiceAddComponent} from './invoice/invoice-add/invoice-add.component';
import {AuthGuardGuard} from './Guard/auth-guard.guard'
import {LoginComponent} from './Login/login/login.component'

const appRoutes:Routes=[
  {
    path:'',component:DashboardComponent
    },
    {
      path:'login',component:LoginComponent
      },
   
  {
  path:'customer',component:CustomerListComponent
  },
  {
    path:'invoice',component:InvoiceListComponent,canActivate: [AuthGuardGuard], 
  },
  {
    path:'Invoiceadd',component:InvoiceAddComponent
  },
  {
    path:'customeradd',component:CustomerAddComponent,canActivate: [AuthGuardGuard],
  },
  
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(appRoutes) ],
})
export class AppRoutingModule {}

