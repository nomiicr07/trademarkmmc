import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input,Output } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Step2Component } from './step2/step2.component';
import { HomeComponent } from './home/home.component';
import {NgbModule,NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AngularMaterialModule} from './angular-material/angular-material.module';
import { LawyerComponent } from './lawyer/lawyer.component';
import { CheckinComponent } from './checkin/checkin.component';
import { SignupComponent } from './signup/signup.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { ToastrModule } from 'ngx-toastr';
import { TmComponent } from './tm/tm.component';
import html2canvas from 'html2canvas';  
import * as jspdf from 'jspdf';

import { OrderComponent } from './order/order.component';
import { SettingComponent } from './setting/setting.component';
import { Dialogbox2Component } from './dialogbox2/dialogbox2.component'; 
import { Dialogbox3Component } from './dialogbox3/dialogbox3.component';
import { CheckedComponent } from './checked/checked.component';
import { LawyerdashboardComponent } from './lawyerdashboard/lawyerdashboard.component';
import { UserdahboardComponent } from './userdahboard/userdahboard.component';
import { NgzorooComponent } from './ngzoroo/ngzoroo.component';
import { NgZorroAntdModule, NZ_ICONS,NZ_I18N, en_US  } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { IntakeComponent } from './intake/intake.component';
import { InvitelawyerComponent } from './invitelawyer/invitelawyer.component';
import { RolesComponent} from './userdahboard/roles/roles.component';
import { AddnewComponent } from './addnew/addnew.component';
import { UserComponent } from './userdahboard/user/user.component';
import { TrademarksComponent } from './userdahboard/trademarks/trademarks.component';
import { OrdersComponent } from './userdahboard/orders/orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UsertrademarkComponent } from './admin-dashboard/usertrademark/usertrademark.component';
import { UseraddnewComponent } from './admin-dashboard/useraddnew/useraddnew.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { AddcomapanyComponent } from './admin-dashboard/addcomapany/addcomapany.component';
import { UserteamComponent } from './admin-dashboard/userteam/userteam.component';
import { UserRolesComponent } from './admin-dashboard/user-roles/user-roles.component';
import { UserTrademarkComponent } from './admin-dashboard/user-trademark/user-trademark.component';
import { UserDashboardComponent } from './admin-dashboard/user-dashboard/user-dashboard.component';
import { UserOrderComponent } from './admin-dashboard/user-order/user-order.component';
import { UserInquiryComponent } from './admin-dashboard/user-inquiry/user-inquiry.component';
import { UserReportsComponent } from './admin-dashboard/user-reports/user-reports.component';
import { CheckoutUserComponent } from './admin-dashboard/checkout-user/checkout-user.component';
import { MyprofileComponent } from './userdahboard/myprofile/myprofile.component';
import { UserProfileComponent } from './admin-dashboard/user-profile/user-profile.component';
import { UserdocumentsComponent } from './admin-dashboard/userdocuments/userdocuments.component';
import { AdmindocumentsComponent } from './userdahboard/admindocuments/admindocuments.component';
import { TradeinfoComponent } from './tradeinfo/tradeinfo.component';
import { TradeDetailComponent } from './userdahboard/trade-detail/trade-detail.component';
import { AdmindocumentComponent } from './userdahboard/admindocument/admindocument.component';
import { AdminInquiryComponent } from './userdahboard/admin-inquiry/admin-inquiry.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


//import { MainUrl } from './main-url';



@NgModule({
  declarations: [
    AppComponent,
   
    MainComponent,
    Step2Component,
    HomeComponent,
    AdminDashboardComponent,
    LawyerComponent,
    CheckinComponent,
    SignupComponent,
    DialogboxComponent,
    TmComponent,
    OrderComponent,
    SettingComponent,
    Dialogbox2Component,
    Dialogbox3Component,
    CheckedComponent,
    LawyerdashboardComponent,
    UserdahboardComponent,
    NgzorooComponent,
    IntakeComponent,
    InvitelawyerComponent,
    RolesComponent,
    AddnewComponent,
    UserComponent,
    TrademarksComponent,
    OrdersComponent,
    CheckoutComponent,
    UsertrademarkComponent,
    UseraddnewComponent,
    FileSelectDirective,
    AddcomapanyComponent,
    UserteamComponent,
    UserRolesComponent,
    UserTrademarkComponent,
    UserDashboardComponent,
    UserOrderComponent,
    UserInquiryComponent,
    UserReportsComponent,
    CheckoutUserComponent,
    MyprofileComponent,
    UserProfileComponent,
    UserdocumentsComponent,
    AdmindocumentsComponent,
    TradeinfoComponent,
    TradeDetailComponent,
    AdmindocumentComponent,
    AdminInquiryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TabsModule.forRoot(),
        FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbPaginationModule, NgbAlertModule,
    ToastrModule.forRoot(),
    NgZorroAntdModule.forRoot(),
    PerfectScrollbarModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    BsDropdownModule.forRoot(),    
    ChartsModule
   
  ],
  entryComponents:[DialogboxComponent,Dialogbox2Component,Dialogbox3Component],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons },
    {
      provide:PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
