import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewInit, HostListener, ElementRef, asNativeElements, Directive } from '@angular/core';
import { RolesComponent } from './roles/roles.component';
import { Button } from 'protractor';
import { UserserviceService } from '../service/userservice.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userdahboard',
  templateUrl: './userdahboard.component.html',
  styleUrls: ['./userdahboard.component.css'],
  

})

export class UserdahboardComponent implements OnInit {
  @ViewChild('user') private dr: ElementRef
  // @HostListener('document:click', ['$event'])
  // @Input() showdiv : boolean = false;
  // @Output() show = new EventEmitter<string>();
  //creating an output event
  @ViewChild('r1') private r1: ElementRef

changed(){
    
  this.route.navigate(['tradeinfo']) 

}


  login: boolean = false;
  router: boolean = true;
  public click: boolean = false;
  show: boolean = true;
  add: boolean;
  value1: string;
  value: string;
  public btn: any = 'show';
  showcontent : boolean = true;
  clicks  : boolean =false ;
  showcontents : boolean = false ;
  constructor(private EL: ElementRef, private service: UserserviceService,private route: Router) {

  }

  ngOnInit() {


  }
  submit() {
    console.log(this.value, this.value1);
    // this.dr.nativeElement.closeAdd();

    let payload = {
      email: this.value1
    }
    this.service.sendemail(payload).subscribe((res) => {
      console.log(res);
    })

  }
  selecting(active){
    if(active){
      this.showcontents = false;

    }else {
      this.showcontent = true;
    }

  }

  public display(): void {
    this.click = !this.click
    //  if(this.click)
    //  {
    //    this.btn = "Hide"

    //  }else 
    //  {
    //    this.btn = "show "

    //  }




  }
  showdiv() {
    this.show = false;
    this.add = !this.add;
  }


  closeAdd() {
    this.show = true;
    this.add = false;
  }
data(value){
console.log(value);
}
}
