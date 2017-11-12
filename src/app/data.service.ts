import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { createTestCustomers } from './test-data'
import { LoggerService } from './logger.service';
import { Customer } from './model';

@Injectable()
export class DataService {
  private customerUrl = 'api/customers';
  private statesUrl = 'api/states';
  constructor(private loggerService: LoggerService, private http: Http) {

  }
  getCustomersP(): Promise<Customer[]> {
    this.loggerService.log(`Getting customers as a promise via http...`);
    return this.http.get(this.customerUrl).toPromise().then(
      response => {
        const custs = response.json().data as Customer[];
        this.loggerService.log(`Got ${custs.length} customers`);
        return custs;
      },
      error => {
        this.loggerService.log(`error occured ${error}`);
        return Promise.reject('Something bad happened..')
      }
    );

    //const customers = createTestCustomers();
    //return new Promise<Customer[]>(resolve => {
    //  setTimeout(() => {
    //    this.loggerService.log(`Got ${customers.length} customers`);
    //    resolve(customers);
    //  }, 1500);
    //});
  }


  getCustomers(): Observable<Customer[]> {
    this.loggerService.log(`Getting customers as a Observable via http`);
    return this.http.get(this.customerUrl)
      .map(response => response.json().data as Customer[])
      .do(custs => this.loggerService.log(`Got ${custs.length} customers`))
      .catch((error: any) => {
        this.loggerService.log(`error occured ${error} in getCustomers`);
        return Observable.throw("something bad happened in getCustomers");
      });


    //this.loggerService.log(`Getting customers as a Observable`);
    //const customers = createTestCustomers();
    //return of(customers).delay(1500).do(() => {
    //  this.loggerService.log(`Got ${customers.length} customers`);
    //});
  }

  getStates(): Observable<string[]> {
    return this.http.get(this.statesUrl)
      .map(response => response.json().data as string[])
      .do(states => this.loggerService.log(`Got ${states.length} states`))
      .catch((error: any) => {
        this.loggerService.log(`error occured ${error} in getStates`);
        return Observable.throw("something bad happened in getStates");
      });
  }

}
