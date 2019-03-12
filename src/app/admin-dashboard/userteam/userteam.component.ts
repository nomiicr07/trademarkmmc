import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userteam',
  templateUrl: './userteam.component.html',
  styleUrls: ['./userteam.component.css']
})
export class UserteamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  allChecked = false;
  indeterminate = false;
  displayData = [];
  data = [
    {
      name    : 'noman',
      age     : 32,
      address : 'karachi',
      checked : false,
      disabled: false
    },
    {
      name    : 'ali',
      age     : 42,
      address : 'lahore',
      checked : false,
      disabled: false
    },
    {
      name    : 'raza',
      age     : 32,
      address : 'islamabad',
      checked : false,
      disabled: false
    },
   
  ];

  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; disabled: boolean; }>): void {
    this.displayData = $event;
    this.refreshStatus();
    
  }

  refreshStatus(): void {
    const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
   
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
        
       
      }
    });
    this.refreshStatus();
  
 
  }

}
