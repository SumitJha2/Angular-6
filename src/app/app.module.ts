import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceAddComponent } from './invoice/invoice-add/invoice-add.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { TestComponent } from './dashboard/test/test.component';
import { SetbackgroundDirective } from './dashboard/Directives/setbackground.directive';
import {customepipe} from "./Pipes/customepipes";
import { LoginComponent } from './Login/login/login.component';


//import {CustomerService} from './customers/shared/customer.service'
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerAddComponent,
    CustomerListComponent,
    DashboardComponent,
    InvoiceComponent,
    InvoiceAddComponent,
    InvoiceListComponent,
    TestComponent,
    SetbackgroundDirective,
    customepipe,
    LoginComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
   AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
