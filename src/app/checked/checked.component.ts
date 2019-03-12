import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';


@Component({
  selector: 'app-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.css']
})
export class CheckedComponent implements OnInit {

  constructor(private userService:UserserviceService) { }
   filter : boolean = false;
   list = [];
   checkbox1 : boolean= false;
   checkbox2 : boolean = false ;
   checkbox3 : boolean = false ;


  ngOnInit() {
    this.userService.getPrice().subscribe((result:any[])=>{
     this.list=result;
     console.log(result)
    })
  }

chang1(){
  if(this.checkbox1) {
    this.checkbox2=false;
    this.checkbox3=false;
    this.checkbox1=false;
  }else{
    this.checkbox2=false;
    this.checkbox3=false;
    this.checkbox1=true;


  }
}

change2(){
  if(this.checkbox2){
    this.checkbox1= false;
    this.checkbox3= false ;
    this.checkbox2 = false ;
  }else {
    this.checkbox1= false;
    this.checkbox3= false ;
    this.checkbox2 = true;

  }
}

change3(){

  if(this.checkbox3) {
    this.checkbox1 =false;
    this.checkbox2 = false;
    this.checkbox3= false ;
  }else {
    this.checkbox1 =false;
    this.checkbox2 = false;
    this.checkbox3= true;

}


}
}
