import { Injectable,OnInit } from '@angular/core';
import {Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/Operators';
import { Customer } from  './customer.model';
import {CustomerType} from './customer-type.model'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
 public  apiUrl=environment.apiUrl;
public selectedCustomer:Customer;
public message:string;
customerList:Customer[];
customerTypeList:CustomerType[];
  constructor(private http:Http) { 
    this.selectedCustomer=new Customer();
  }
  getCustomerList(id:number){
    var url=this.apiUrl;
    if(id>0)
    {
      url=url+"Customer/CustomerByType/"+id;
    }
    else{
      url=url+"Customer/Customer";
    }
    
    this.http.get(url)
    .pipe(map((data:Response)=>{
      return data.json() as Customer[];
    })).toPromise().then(x=>{
      this.customerList=x;
    })
  }
  getSingleCustomerList(id:string): Observable<Customer>{
    return this.http.get(this.apiUrl+"Customer/Customers/"+id)
     .pipe(map((data:Response)=>{
      return data.json() as Customer;
    }))
  }
  getCustomerTypeList(): Observable<CustomerType[]>{
    return this.http.get(this.apiUrl+"Customer/CustomerType")
    .pipe(map((data:Response)=>{
      return data.json() as CustomerType[];
    }))
  }
  postCustomer(cust:Customer)
    {
      alert(this.apiUrl+"Customer");
      var body=JSON.stringify(cust);
      alert(body);
      var headerOptions=new Headers({'Content-Type':'application/json'});
      var requestOptions=new RequestOptions({method:RequestMethod.Post,headers:headerOptions});
      return this.http.post(this.apiUrl+"Customer",body,requestOptions).pipe(map(x=>x.json()));
    }

    postFile(file: File): Observable<Object> {
      const formData: FormData = new FormData();
      formData.append('avatar', file, file.name);
      return this.http.post(this.apiUrl+"FileUpload/UploadPhoto", formData) .pipe(map(
        (response => response.json())));
    }
    deleteCustomer(id:string)
    {
      var body=JSON.stringify(id);
      var headerOptions=new Headers({'Content-Type':'application/json'});
      var requestOptions=new RequestOptions({method:RequestMethod.Delete});
      return this.http.delete(this.apiUrl+"Customer/"+id,requestOptions).pipe(map(x=>x.json()));

      // alert('sum'+id);
      // alert(this.apiUrl+"Customer/DeCustomer/"+id);
      // return this.http.get(this.apiUrl+"Customer/DeCustomer/"+id)
      // .pipe(map((data:Response)=>
      // {
      //   alert('ssd');
      //   return data.json();
      // }));
     

      
    }
}
