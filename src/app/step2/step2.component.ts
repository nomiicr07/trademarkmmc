import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserserviceService } from '../service/userservice.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { ToastrService } from 'ngx-toastr';
import { Dialogbox3Component } from '../dialogbox3/dialogbox3.component';
import { Dialogbox2Component } from '../dialogbox2/dialogbox2.component';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  
   username: string;
   email : string;
   password : string;
   cpassword: string;
   telno: string;
   address: string;
   cname : string
   searchTerm: string;
   loginemail : string;
   lpassword: string;
   list = [];
   lists=[];
   screen : 'step2';
   screen2: 'admin';
   usersearch : string;
   
    

  closeResult: string = '';
  login: Boolean = false;
  constructor(
    private modalService: NgbModal,
    private service : UserserviceService,
     private router : Router,
     public dialog: MatDialog,
     private toaster: ToastrService) { }

     
  ngOnInit() {
    this.service.list().subscribe((result:any)=>{
      this.list=result;
    })
 
  }
  onCheckboxChange(option,event){
    if(event){
      this.lists.push(option);
    }else {
      for(var i=0; i <this.list.length; i ++){
        if(this.lists[i].Id == option.Id){
          this.lists.splice(i,1);
        }
      }
    }
  }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
  reg() {
    console.log('this button is clicked');
    const payload= {
        name: this.username,
        email: this.email,
        password : this.password,
        telephone: this.telno

    }
    this.service.registerUser(payload).subscribe((res: any) => {
      if(res.message == 'success'){
        this.toaster.success("Account created");
         this.router.navigate(['/payment']);
        // this.openDialog2();
      }else {
        console.log('error')
      }
    })
  }
  continueBtn() {
    this.login = true;
  }

  loginUser() {
    const payload = {
           email : this.loginemail,
           password : this.lpassword
    }
    console.log('payload is ', payload);
    this.service.loginUser(payload).subscribe((res:any)=>{
      console.log("success login", res);
      if(res.message == 'success' && res.token){
        localStorage.setItem('token', res.token);
        this.toaster.success('done');
        this.router.navigate(['/payment'])  

      }
      else if(res.message == "failed") {
        this.toaster.error("Email or Password is not found");
      }
    })

  }
  
  openDialog() {
        if(this.lists.length == 0){
          this.dialog.open(DialogboxComponent,{
            data: {
              screen2:'admin'
            }
          })
        } else {
          let classid = [];
          for(let i = 0; i < this.lists.length; i++) {
            classid.push(this.lists[i].Id)
          }
          let payload = {
            trademarkName: this.usersearch,
            classid
          }
          this.service.usersearch(payload).subscribe((res :any)=>{

            console.log(res);
            if(res.status == 'success') {
              this.dialog.open(DialogboxComponent, 
                { disableClose:true,
                  data: {
                  screen: 'step2' ,
                  }
              });
            }
          })
          
      this.dialog.afterAllClosed.subscribe((res) => {
        console.log('working')
        this.login = true;
      })
    
        }
         
      
  }


  openDialog2() {
    
      this.dialog.open(Dialogbox3Component, { disableClose:true,
        data: {
          screen: 'step2',
          screen2: 'admin'
          
        }
      });

      this.dialog.afterAllClosed.subscribe((res) => {
        console.log('working')
        this.login = true;
      })
    
  }

  scroll(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
 }
 
}
