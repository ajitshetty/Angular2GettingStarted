import { Component,EventEmitter,Input,Output } from '@angular/core';

import { Customer } from './model';


@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: "customer-detail.component.html",  
})
export class CustomerDetailsComponent {

  @Input() customer: Customer;
  @Output() shift= new EventEmitter<number>();

  showAddress = true;

  right() {
    this.shift.emit(1);
  }

  left() {
    this.shift.emit(-1);
  }
}
