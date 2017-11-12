import { Component, OnInit, Input } from '@angular/core';

import { Address } from './model';
import { DataService } from './data.service';

@Component({
  moduleId: module.id,
  selector: 'address-comp',
  templateUrl: 'address.component.html'
})
export class AddressComponent implements OnInit {
  regions = ["North", "South", "East", "West", "Midwest"];
  states: string[]; // ["California", "Jalisco", "Quebec", "Illinois"];
  @Input() address: Address;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getStates();
  }

  getStates() {
    this.dataService.getStates().subscribe(states => {this.states = states;},
                                            errorMsg => { alert(errorMsg); }    );
  }
}
