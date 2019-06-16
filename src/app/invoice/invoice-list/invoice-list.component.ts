import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../shared/invoice.service'
import {InvoiceMaster} from '../shared/invoice-master.model'

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
 private invoiceList:InvoiceMaster[]
  constructor(private invoiceService:InvoiceService) { }

  ngOnInit() {
    this.getInvoiceList();
  }
 getInvoiceList(){
   this.invoiceService.getInvoice();
 }
}
