import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailsComponent } from './customer-detail.component';
import { AddressComponent } from './address.component';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';
import { InMemoryDataService } from './in-memory-data-service';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    AddressComponent
  ],
  providers: [DataService,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
