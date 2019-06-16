import { Customer } from "../../customers/shared/customer.model";
import {InvoiceDetail} from './invoice-detail.model'

export class InvoiceMaster {
    InvoiceID:number
    CustomerID:number
    InvoiceNo:string
    OrderNo:string
    OrderDate:Date
    ChallanNo:string
    InvoiceDate:Date
    GrossTotal:number
    NetTotal:number
    IsDeleted:boolean
    CustomerName:string
    InvoiceDetailList:InvoiceDetail[]
    CustomerList:Customer[]
}
