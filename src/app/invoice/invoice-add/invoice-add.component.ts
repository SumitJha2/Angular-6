import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../shared/invoice.service'
import {InvoiceDetail} from '../shared/invoice-detail.model'
import {NgForm} from '@angular/forms'
import {Router,ActivatedRoute,Params} from '@angular/router'

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css','../invoice-list/invoice-list.component.css']
})
export class InvoiceAddComponent implements OnInit {
 public InvoiceDetail:InvoiceDetail;
 public lstDetail:InvoiceDetail[];

  constructor(private invoiceService:InvoiceService,public activatedRoute: ActivatedRoute) { 
    this.InvoiceDetail=new InvoiceDetail();
  }

  ngOnInit() {
    let InvoiceId;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      InvoiceId = params['InvoiceId'];
      if(InvoiceId>0)
      {
        this.getInvoiceWithDetail(InvoiceId);
      }
      else{
        this.getInvoiceWithDetail(0);
      }
});
  
   
  }
  getInvoiceWithDetail(invoiceId:number){
    this.invoiceService.getInvoiceWithDetail(invoiceId);
  }
  AddProduct(){
    if(this.invoiceService.selectedInvoice.InvoiceDetailList==null){
      this.invoiceService.selectedInvoice.InvoiceDetailList=[];
    }
   this.invoiceService.selectedInvoice.InvoiceDetailList.push(this.InvoiceDetail);
   this.InvoiceDetail=new InvoiceDetail();
   this.CalculateNetAmount();
  }
  CalculateNetAmount()
  {
    let sum:number=0;
    this.invoiceService.selectedInvoice.NetTotal=0;
    alert( this.invoiceService.selectedInvoice.InvoiceDetailList.length);
  for(var i = 0; i < this.invoiceService.selectedInvoice.InvoiceDetailList.length; i++){
    sum+=Number(this.invoiceService.selectedInvoice.InvoiceDetailList[i].Amount);
    // for testing perpus
    this.invoiceService.selectedInvoice.InvoiceDetailList[i].InvoiceDetailID=0;
    this.invoiceService.selectedInvoice.InvoiceDetailList[i].InvoiceMasterID=0;
    this.invoiceService.selectedInvoice.InvoiceDetailList[i].IsDeleted=true;

  }
  this.invoiceService.selectedInvoice.NetTotal=sum;
  }
  onSubmit(form:NgForm)
  {
    //here need to assign these value as net total and list
    form.value.NetTotal=this.invoiceService.selectedInvoice.NetTotal;
    form.value.InvoiceDetailList= this.invoiceService.selectedInvoice.InvoiceDetailList;
    form.value.CustomerList=null;
    form.value.IsDeleted=false;
    form.value.InvoiceID=0;
    alert(this.invoiceService.selectedInvoice.NetTotal);
    this.invoiceService.postInvoice(form.value)
   

    this.invoiceService.postInvoice(form.value)
    .subscribe(data=>{ alert('Success')});
  }
 
  
}
