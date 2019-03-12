import { Component, OnInit } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';


@Component({
  selector: 'app-userdocuments',
  templateUrl: './userdocuments.component.html',
  styleUrls: ['./userdocuments.component.css']
})
export class UserdocumentsComponent implements OnInit {

  constructor(private msg: NzMessageService) { }

  ngOnInit() {
  }
  handleChange({ file, fileList }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

}
