import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
import { UserserviceService} from '../service/userservice.service';
import html2pdf from 'simple-html2pdf';


@Component({
  selector: 'app-tm',
  templateUrl: './tm.component.html',
  styleUrls: ['./tm.component.css']
})
export class TmComponent implements OnInit {

  constructor( private service : UserserviceService) { }
  isLoaded: Boolean = false;
  data: any;

  ngOnInit() {
    // this.service.getTm().subscribe((res: any) => {
    //   console.log('res is ', res.data);
    //   this.data = res.data;
    //   this.isLoaded = true;
    // })


    this.service.getTm().subscribe((res: any) => {
      console.log('res is ', res.data);
      this.data = res.data;
      this.isLoaded = true;

    })
}

  // public captureScreen()  
  // {  
  //   var data = document.getElementById('content'); 
  //   html2pdf(data,{
  //     filename: 'file.pdf',
  //     margin: 10,
  //     smart: true
  //   }, () => { console.log('finished!!') })
    // html2canvas(data).then(canvas => {  
    //   // Few necessary setting options  
    //   // var imgWidth = 208;   
    //   // var pageHeight = 90;    
    //   // var imgHeight = canvas.height * imgWidth / canvas.width;  
    //   // var heightLeft = imgHeight;  
  
    //   // const contentDataURL = canvas.toDataURL('image/png')  
    //   // let pdf = new jspdf('p', 'mm'); // A4 size page of PDF   
    //   // pdf.addImage(contentDataURL, 'PNG',5, 5) 
     
    //   // pdf.save('MYPdf.pdf'); // Generated PDF   

    //   var imgData = canvas.toDataURL('image/png');
    //   console.log('Report Image URL: '+imgData);
    //   var imgh='100';
    //   var imgl='200';
    //   var doc = new jspdf(); //210mm wide and 297mm high
    //   doc.text(data.append,100,100)
    //   //doc.text(10,10,imgData)
    //   doc.addImage(imgData, 40,180, 200);
    //   doc.save('sample.pdf');




    // });  

  // }  



  captureScreen() {
    html2canvas(document.querySelector("#content")).then(canvas => {
      //document.body.appendChild(canvas)
      var pdf = new jspdf('p', 'pt', [canvas.width, canvas.height]);
      var imgData  = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData,15,0,canvas.width/2, canvas.height);
      pdf.save('TM1.pdf');

    }); 
  }


}
