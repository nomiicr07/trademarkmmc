import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcomapany',
  templateUrl: './addcomapany.component.html',
  styleUrls: ['./addcomapany.component.css']
})
export class AddcomapanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  allChecked = false;
  indeterminate = false;
  displayData = [];
  data = [
    {
      name    : 'raza',
      age     : 32,
      address : 'karachi',
      checked : false,
      disabled: false
    },
    {
      name    : 'shahkeel',
      age     : 42,
      address : 'lahore',
      checked : false,
      disabled: false
    },
    {
      name    : 'junaid',
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
