import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import { UserserviceService } from '../../service/userservice.service';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { U } from 'ng-zorro-antd';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { relative } from 'path';


@Component({
  selector: 'app-trademarks',
  templateUrl: './trademarks.component.html',
  styleUrls: ['./trademarks.component.css']
})
export class TrademarksComponent implements OnInit {
        list: [];
        changeroute(){
          this.router.navigate(['/tradeinfo'])
        }

        @Output() change = new EventEmitter();


        clicks(g : number) {
        this.router.navigate(['../tradeinfo', g], {relativeTo : this.route})          
        }



   

  @Output() myoutput= new EventEmitter<any>();
  functions : any = this.rowSelcted;
  // employees:Employee[]; 
  constructor(private trademarkservice: UserserviceService, public router: Router, public route : ActivatedRoute) {



    
    //   this.employees=[{
    //     ID:"123",
    //     Type :'',
    //     Subtype : '',
    //     Sign : '',
    //     Status : '',
    //     Substatus : '',
    //     Trademark : '',
    //    Country : '',
    //    Classes : '',
    //    Niche : '',
    //    colorClaimed : '',
    //    family:'',
    //    fillingLanguage : '',
    //    WorkingLanguage : '',
    //    Desclaimer : '',
    //    limitation : '',
    //     date : {
    //       name : ''
    //     }


    // }]
    //  }
  }
  ngOnInit() {
    
    this.trademarkservice.getAlltrademark().subscribe((res: any) => {
      this.list = res;
    })
    

  }
  select(g : number){
    this.router.navigate(['/tradeinfo/' + g]);
  }

  click : boolean =false ;
  rowSelcted(u : number) {
   
   

  }



  
}


// export class Employee{
//   ID:string;
//   Type :string;
//   Subtype:string;
//   Sign : string;
//   Status:string;
//   Substatus : string;
//   Trademark : string;
//   Country:string;
//   Classes:String;
//   Niche : string;
//   colorClaimed : string;
//   family:string;
//   fillingLanguage : string;
//   WorkingLanguage:string;
//   Desclaimer : string;
//   limitation : string;
//   date : {
//     name : string
//   }
// }
