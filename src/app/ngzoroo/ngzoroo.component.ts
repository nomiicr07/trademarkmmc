import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngzoroo',
  templateUrl: './ngzoroo.component.html',
  styleUrls: ['./ngzoroo.component.css']
})
export class NgzorooComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  constructor() { }

  ngOnInit() {
  }
 
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}
