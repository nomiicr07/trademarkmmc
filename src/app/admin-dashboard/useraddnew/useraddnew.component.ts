import { Component, OnInit } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { UserserviceService } from 'src/app/service/userservice.service';

const URL = 'http://localhost:3000/api/registerTrademark/uploadLogo';


@Component({
  selector: 'app-useraddnew',
  templateUrl: './useraddnew.component.html',
  styleUrls: ['./useraddnew.component.css']
})
export class UseraddnewComponent implements OnInit {
work:boolean;
works : boolean;
workss : boolean;
listOfOption = [];
using : boolean;
list= [];
  constructor(private msg: NzMessageService, private service : UserserviceService) { }

  ngOnInit() {
this.service.list().subscribe((result : any)=>{
  this.list = result;
  
})

    
  }
 log(value : any){
     if(value === 'option') {
       this.work = !this.work
       this.works= false;
       this.workss=false;
     }else if(value === 'logo') {
       this.works = !this.works
       this.work= false ;
       this.workss = false ;

     }else if(value === 'wl') {
       this.workss = !this.workss
       this.works= false ;
       this.work= false ;
     }

   }
  
use(value : any){
  if(value === 'yes'){
    this.using = true;
  }else if(value === 'no') {
    this.using = false;
  }

}

fileList =[];
previewImage = '';
previewVisible = false;
handlePreview = (file: UploadFile) => {
  this.previewImage = file.url || file.thumbUrl;
  this.previewVisible = true;
}
}
