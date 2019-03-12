import { Component, OnInit,Directive } from '@angular/core';
import {MatDialog} from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { Dialogbox2Component } from '../dialogbox2/dialogbox2.component';
import { stringify } from 'querystring';




@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  
})
export class AdminDashboardComponent implements OnInit {
  useraddnew : boolean = false;
  constructor( private dialog :MatDialog) { }
  checkoutuser : boolean ;
  clik :String = 'click'
  useradd : boolean= false;


value :String;

  ngOnInit() {
    // this.dialog.open(Dialogbox2Component, {
    //   data: {
    //     screen: 'admin'
    //   }
    // });

  }
adduser(){
 
  // if(  this.clik==='click') {
  //   this.useraddnew = true;
  //   this.checkoutuser = false;
  //   console.log(this.clik);
  // }else if(this.clik === '') {
  //   this.useraddnew = false ;
  // }

}
visible = false;

open(): void {
  this.visible = true;
}

close(): void {
  this.visible = false;
}

}
