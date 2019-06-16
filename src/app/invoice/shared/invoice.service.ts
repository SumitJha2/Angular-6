import { Injectable } from '@angular/core';
import { InvoiceMaster } from './invoice-master.model'
import {Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http'
import { environment } from '../../../environments/environment';
// import { map } from '../../../../node_modules/rxjs/Operators';
import { Test } from './test.model';

import {Observable} from 'rxjs';
import {map} from 'rxjs/Operators'


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  selectedInvoice:InvoiceMaster;
  invoiceList:InvoiceMaster[];
  
 public invoiceApi=environment.invoiceApiUrl;
 
  constructor(private http:Http) {
    this.selectedInvoice=new InvoiceMaster();
   }
   getInvoice(){
    return this.http.get(this.invoiceApi+"/GetInvoice").pipe(map((data:Response)=>
    {
      return data.json() as InvoiceMaster[]
    })).toPromise().then(x=>{
      this.invoiceList=x;
    });
   }
   getInvoiceWithDetail(invoiceId:number){
    return this.http.get(this.invoiceApi+"/GetInvoiceWithDetail?invoiceId="+invoiceId).pipe(map((data:Response)=>
    {
      return data.json() as InvoiceMaster
    })).toPromise().then(x=>{
      this.selectedInvoice=x;
    });
   }
  //  getInvoiceWithDetail(){
  //   return this.http.get(this.invoiceApi+"/GetInvoiceWithDetail").pipe(map((data:Response)=>
  //   {
  //     return data.json() as InvoiceMaster
  //   })).toPromise().then(x=>{
  //     this.selectedInvoice=x;
  //   });
  //  }
 
  postInvoice(inv:Test)
  {
    alert(this.invoiceApi);     
    var body=JSON.stringify(inv);
    alert(body);
    var headerOptions=new Headers({'Content-Type':'application/json'});
    var requestOptions=new RequestOptions({method:RequestMethod.Post,headers:headerOptions});
    return this.http.post("http://localhost:4797/api/Invoice",body,requestOptions).pipe(map(x=>x.json()));
    // return this.http.post(this.invoiceApi,body,requestOptions).pipe(map(x=>x.json()));
  }
  
  

}
