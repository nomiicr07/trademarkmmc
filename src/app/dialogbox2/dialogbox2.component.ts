import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-dialogbox2',
  templateUrl: './dialogbox2.component.html',
  styleUrls: ['./dialogbox2.component.css']
})
export class Dialogbox2Component implements OnInit {
  
   select :string;
   usedBy = 'Select Type';
  constructor() { }

  ngOnInit() {

  }

  onChange(value) {
    console.log('value is ', this.usedBy);
  }



}