import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-user',
  templateUrl: './checkout-user.component.html',
  styleUrls: ['./checkout-user.component.css']
})
export class CheckoutUserComponent implements OnInit {
  Corporation : boolean;
  Limited : boolean;
  indivual : boolean;
  Partnership : boolean;
  Proprietorship : boolean;
  checking :boolean;
  list=[];
  constructor() { }

  ngOnInit() {
  }
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
