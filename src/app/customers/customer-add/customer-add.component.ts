import { Component, OnInit,OnChanges } from '@angular/core';
import {NgForm} from '@angular/forms'
import {CustomerService} from '../shared/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Customer } from '../shared/customer.model';
import { CustomerType } from '../shared/customer-type.model';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit,OnChanges {
  public fileToUpload:any;
  public customerTypeList:CustomerType[];
  constructor(public customerService : CustomerService,public activatedRoute: ActivatedRoute) { 
  }
  ngOnChanges(){
    alert('on changes page');
  }
  ngOnInit() {
    alert('on init page');
    let customerId;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
       customerId = params['customerId'];
});

// if edit mode the bind the customer object 
 if(customerId!=undefined){ 
this.customerService.getSingleCustomerList(customerId)
.subscribe(res => {
  this.customerService.selectedCustomer = res;
  })
}else{
 this.formReset();
}
// load the customer types
this.loadCustomerType();
}
loadCustomerType()
{
  this.customerService.getCustomerTypeList()
  .subscribe(res=>{
    this.customerTypeList=res;
  })
}

  onSubmit(form:NgForm)
  {
    // set the image path and call the save to database
    if(this.fileToUpload!=null)
    {
      form.value.ImagePath=this.fileToUpload.name;
    }
     this.customerService.postCustomer(form.value)
    .subscribe(data=>{
      this.formReset();
      this.customerService.getCustomerList(0);
     
    })
  }
  formReset()
  { 
  this.customerService.selectedCustomer.CustomerName="";
  this.customerService.selectedCustomer.CustomerID=null;
  this.customerService.selectedCustomer.ShippingAddress="";
  this.customerService.selectedCustomer.BillingAddress="";
  this.customerService.selectedCustomer.VAT="";
  this.customerService.selectedCustomer.GST="";
  this.customerService.selectedCustomer.ImagePath="";
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
 // upload the file and save to folder using web api
  uploadFileToActivity() {
    this.customerService.postFile(this.fileToUpload).subscribe(data => {
      }, error => {
        console.log(error);
      });
  }
  onCustomerTypeSelected(event)
  {
    alert('sumit');
  }

}
