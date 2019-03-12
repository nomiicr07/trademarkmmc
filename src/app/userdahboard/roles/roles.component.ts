import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  @Input() showdiv : boolean = false;
// @Output() show = new EventEmitter<boolean>() 




 constructor() { }

  ngOnInit() {
  }
  searchValue = '';
  // filterAddressArray = [
  //   { text: 'karachi', value: 'karachi' },
  //   { text: 'lahore', value: 'lahore' }
  // ];
  searchAddress = [];
  sortMap = {
    name   : null,
    age    : null,
    address: null
  };
  sortName = null;
  sortValue = null;
  data = [
    {
      name   : 'noman',
      age    : 23,
      address: 'karachi'
    },
    {
      name   : 'ahmed',
      age    : 23,
      address: 'karachi'
    },
    {
      name   : 'talha',
      age    : 23,
      address: 'karachi'
    },
    {
      name   : 'mohsin',
      age    : 32,
      address: 'London No. 2 Lake Park'
    }
  ];
  displayData = [ ...this.data ];

  sort(sortName: string, value: boolean): void {
    this.sortName = sortName;
    this.sortValue = value;
    for (const key in this.sortMap) {
      this.sortMap[ key ] = (key === sortName ? value : null);
    }
    this.search();
  }

  // filterAddressChange(value: string[]): void {
  //   this.searchAddress = value;
  //   this.search();
  // }

  search(): void {
    const filterFunc = (item) => {
      return (this.searchAddress.length ? this.searchAddress.some(address => item.address.indexOf(address) !== -1) : true) &&
        (item.name.indexOf(this.searchValue) !== -1);
    };
    const data = this.data.filter(item => filterFunc(item));
    this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
  }








}
