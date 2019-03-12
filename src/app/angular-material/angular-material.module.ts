import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,
        MatCheckboxModule,
        MatInputModule, 
        MatNativeDateModule, 
        MatCardModule,
        MatDatepickerModule,      
        MatDatepicker,
        MatMenuModule,
        MatRadioModule,      
        MatSelectModule,
        MatTabsModule,
        MatDialogModule, 
        MatIconModule,
        MatProgressSpinnerModule,
        MatSidenavModule, 
        MatListModule,
        MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    CommonModule,
    MatRadioModule,      
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule, 
    MatDatepickerModule,      
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule      

  ],
  exports:[
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatDatepickerModule,      
    MatRadioModule,      
    MatTabsModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatCardModule,  
    MatListModule,
    MatToolbarModule
  ]
})
export class AngularMaterialModule { }
