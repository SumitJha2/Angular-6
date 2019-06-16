import { Component, OnInit } from '@angular/core';
import {InvoiceService} from './shared/invoice.service'

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers:[InvoiceService]
})
export class InvoiceComponent implements OnInit {
  constructor(private invoiceService:InvoiceService) { }

  ngOnInit() {
  }

}
