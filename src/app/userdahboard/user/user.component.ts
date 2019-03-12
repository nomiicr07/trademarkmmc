import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   list = [];
  constructor(private service : UserserviceService) { }

  ngOnInit() {
    this.service.getAllusers().subscribe((result : any)=>{
      this.list = result;
    })
  }


  // searchValue = '';
  // filterAddressArray = [
  //   { text: 'karachi', value: 'karachi' },
  //   { text: 'lahore', value: 'lahore' }
  // ];
  // searchAddress = [];
  // sortMap = {
  //   name   : null,
  //   age    : null,
  //   address: null
  // };
  // sortName = null;
  // sortValue = null;
  // data = [
  //   {
  //     name   : 'noman',
  //     age    : 23,
  //     address: 'karachi'
  //   },
  //   {
  //     name   : 'ahmed',
  //     age    : 23,
  //     address: 'karachi'
  //   },
  //   {
  //     name   : 'talha',
  //     age    : 23,
  //     address: 'karachi'
  //   },
  //   {
  //     name   : 'mohsin',
  //     age    : 32,
  //     address: 'London No. 2 Lake Park'
  //   }
  // ];
  // displayData = [ ...this.data ];

  // sort(sortName: string, value: boolean): void {
  //   this.sortName = sortName;
  //   this.sortValue = value;
  //   for (const key in this.sortMap) {
  //     this.sortMap[ key ] = (key === sortName ? value : null);
  //   }
  //   this.search();
  // }

  // filterAddressChange(value: string[]): void {
  //   this.searchAddress = value;
  //   this.search();
  // }

  // search(): void {
  //   const filterFunc = (item) => {
  //     return (this.searchAddress.length ? this.searchAddress.some(address => item.address.indexOf(address) !== -1) : true) &&
  //       (item.name.indexOf(this.searchValue) !== -1);
  //   };
  //   const data = this.data.filter(item => filterFunc(item));
  //   this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
  // }






  allChecked = false;
  indeterminate = false;
  displayData = [];
  // list = [
  
  // ];

  currentPageDataChange($event: Array<{ Name: string; Email:string; CompanyName: string; checked: boolean; disabled: boolean; }>): void {
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
   
    this.displayData.forEach(list => {
      if (!list.disabled) {
        list.checked = value;
        
       
      }
    });
    this.refreshStatus();
  
 
  }

}
