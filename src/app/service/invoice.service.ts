import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Invoice } from '../interface/invoice';
@Injectable()
export class InvoiceService {
  private addInvoiceUrl: string;
  private newInvoice: string;

  constructor(private http: HttpClient) { }

  addInvoice(status, amount, payment_method): Observable<Invoice> {
    this.addInvoiceUrl = 'http://api.marketplace.com/add_invoice?status=' + status + '&amount=' + amount + '&payment_method=' + payment_method;
    return this.http.get<Invoice>(this.addInvoiceUrl);
  }

}
