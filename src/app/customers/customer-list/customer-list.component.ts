import { Component, OnInit, OnChanges } from '@angular/core';
import {CustomerService} from '../shared/customer.service';
import {Customer} from '../shared/customer.model'
import { CustomerType } from '../shared/customer-type.model';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
 
})
export class CustomerListComponent implements OnInit,OnChanges {
  public customerTypeList:CustomerType[];
  constructor(public customerService:CustomerService) { 
  }
  ngOnInit() {
    alert('On Init');
    this.customerService.getCustomerList(0);
    this.loadCustomerType();
  }
  showEditCustomer(customer:Customer){
    this.customerService.selectedCustomer=Object.assign({},customer);
  }
  loadCustomerType(){

  this.customerService.getCustomerTypeList()
  .subscribe(res=>{
    this.customerTypeList=res;
  })
}
ngOnChanges(){
  alert('on changes page');
  

}
onCustomerTypeSelected(event)
  {
    alert('On change');
    this.customerService.getCustomerList(event);
    // alert(event);
    // alert('sumit');
  }
  deleteCustomer(customerId:string){
    alert(customerId);
    
    this.customerService.deleteCustomer(customerId);
    alert(customerId);
  }
}
