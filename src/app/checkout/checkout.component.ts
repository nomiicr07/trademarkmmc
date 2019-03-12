import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  Corporation : boolean;
  Limited : boolean;
  indivual : boolean;
  Partnership : boolean;
  Proprietorship : boolean;
  checking :boolean;
  list=[];
  constructor(private service : UserserviceService) { }

  ngOnInit() {
    this.service.list().subscribe((result : any)=>{
      this.list = result;
    })
  }
  fileList = [
    // {
    //   uid: 1,
    //   name: 'xxx.png',
    //   status: 'done',
    //   response: 'Server Error 500', // custom error message to show
    //   url: 'http://www.baidu.com/xxx.png'
    // },
    // {
    //   uid: 2,
    //   name: 'yyy.png',
    //   status: 'done',
    //   url: 'http://www.baidu.com/yyy.png'
    // },
    // {
    //   uid: 3,
    //   name: 'zzz.png',
    //   status: 'error',
    //   response: 'Server Error 500', // custom error message to show
    //   url: 'http://www.baidu.com/zzz.png'
    // }
  ];

 log(value : any) {
      if(value === 'Individual') {
        this.indivual = !this.indivual;
        this.Corporation = false;
        this.Limited = false ;
        this.Partnership=false ;
        this.Limited=false;
      } else if(value === 'Corporation') {
        this.Corporation = !this.Corporation;
        this.indivual = false ;
        this.Limited = false ;
        this.Proprietorship = false ;
        this. Partnership = false ;
      } else if (value === 'Limited') {
        this.Limited = ! this.Limited;
        this. indivual = false ;
        this. Partnership = false ;
        this. Corporation = false ; 
        this. Proprietorship = false ;

      }else if ( value === 'Partnership') {
        this.Partnership = !this.Partnership;
        this.Limited = false;
        this.Corporation = false ;
        this.Proprietorship = false ;
        this.indivual = false ;

      }else if( value === 'Proprietorship')  {
        this.Proprietorship = !this.Proprietorship;
        this.indivual = false ;
        this.Limited = false ;
        this.Partnership = false ;
        this.Corporation = false ;

      }
 }

 check(value : any ) {
   if(value === "yes"){
     this.checking = ! this.checking
   } else if(value === "no"){
     this.checking = false ;
   }
 }
}
