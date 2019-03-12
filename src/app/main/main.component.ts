import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
list = [];
lists=[];
  constructor(private user : UserserviceService) { }

  ngOnInit() {
    this.user.list().subscribe((result:any)=>{
      this.list=result;
    })
  }
  onCheckboxChange(option,event){
    if(event.target.checked){
      this.lists.push(option);
    }else {
      for(var i=0; i <this.list.length; i ++){
        if(this.lists[i].Id == option.Id){
          this.lists.splice(i,1);
        }
      }
    }
  }
}
