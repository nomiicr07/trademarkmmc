import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tradeinfo',
  templateUrl: './tradeinfo.component.html',
  styleUrls: ['./tradeinfo.component.css']
})
export class TradeinfoComponent implements OnInit {
  employees:Employee[]; 
   constructor() {
    this.employees=[{
      ID:"123",
      Type :'',
      Subtype : '',
      Sign : '',
      Status : '',
      Substatus : '',
      Trademark : '',
     Country : '',
     Classes : '',
     Niche : '',
     colorClaimed : '',
     family:'',
     fillingLanguage : '',
     WorkingLanguage : '',
     Desclaimer : '',
     limitation : '',
      date : {
        name : ''
      }
  
  
  }]
    }

  ngOnInit() {
  }

}
export class Employee{
  ID:string;
  Type :string;
  Subtype:string;
  Sign : string;
  Status:string;
  Substatus : string;
  Trademark : string;
  Country:string;
  Classes:String;
  Niche : string;
  colorClaimed : string;
  family:string;
  fillingLanguage : string;
  WorkingLanguage:string;
  Desclaimer : string;
  limitation : string;
  date : {
    name : string
  }
}