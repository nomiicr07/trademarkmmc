import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Step2Component } from './step2/step2.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LawyerComponent } from './lawyer/lawyer.component';
import { CheckinComponent } from './checkin/checkin.component';
import { SignupComponent } from './signup/signup.component';
import { TmComponent } from './tm/tm.component';
import { OrderComponent } from './order/order.component';
import { SettingComponent } from './setting/setting.component';
import { CheckedComponent } from './checked/checked.component';
import { LawyerdashboardComponent } from './lawyerdashboard/lawyerdashboard.component';
import { UserdahboardComponent } from './userdahboard/userdahboard.component';
import { NgzorooComponent } from './ngzoroo/ngzoroo.component';
import { IntakeComponent } from './intake/intake.component';
import { InvitelawyerComponent } from './invitelawyer/invitelawyer.component';
import { RolesComponent } from './userdahboard/roles/roles.component';
import { AddnewComponent } from './addnew/addnew.component';
import { UserComponent } from './userdahboard/user/user.component';
import { OrdersComponent } from './userdahboard/orders/orders.component';
import { TrademarksComponent } from './userdahboard/trademarks/trademarks.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UsertrademarkComponent } from './admin-dashboard/usertrademark/usertrademark.component';
import { UseraddnewComponent } from './admin-dashboard/useraddnew/useraddnew.component';
import { AddcomapanyComponent } from './admin-dashboard/addcomapany/addcomapany.component';
import { UserteamComponent } from './admin-dashboard/userteam/userteam.component';
import { CheckoutUserComponent } from './admin-dashboard/checkout-user/checkout-user.component';
import { MyprofileComponent } from './userdahboard/myprofile/myprofile.component';
import { UserProfileComponent } from './admin-dashboard/user-profile/user-profile.component';
import { UserdocumentsComponent } from './admin-dashboard/userdocuments/userdocuments.component';
import { TradeinfoComponent } from './tradeinfo/tradeinfo.component';
import { UserTrademarkComponent } from './admin-dashboard/user-trademark/user-trademark.component';
import { TradeDetailComponent } from './userdahboard/trade-detail/trade-detail.component';
import { UserInquiryComponent } from './admin-dashboard/user-inquiry/user-inquiry.component';
import { UserRolesComponent } from './admin-dashboard/user-roles/user-roles.component';
import { UserReportsComponent } from './admin-dashboard/user-reports/user-reports.component';
import { AdmindocumentComponent } from './userdahboard/admindocument/admindocument.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'step1',
    component: Step2Component
  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'userdashboard',
    component: AdminDashboardComponent,
    children: [{
      path: 'lawyer',
      component: LawyerComponent,
      outlet: 'userdashboard'
    },
    {
      path: 'order',
      component: OrderComponent,
      
    },


    {
      path: 'setting',
      component: SettingComponent,
      outlet: 'userdashboard'


    },
    {
      path: 'usertrademark',
      component: UsertrademarkComponent,
      outlet: 'userdashboard'
    },
    {
      path: 'UserAddnew',
      component: UseraddnewComponent,
    },
    {
      path: 'addcomapany',
      component: AddcomapanyComponent,


    },
    {
      path:'userroles',
      component:UserRolesComponent
    },
    {
      path: 'userteam',
      component: UserteamComponent,
    
    },
    {
      path: 'checkoutuser',
      component: CheckoutUserComponent,
     
    }, {
      path: 'userdocuments',
      component: UserdocumentsComponent,
    },
    {
      path: 'userprofile',
      component: UserProfileComponent,
    }, {
      path: 'usertrademark',
      component: UserTrademarkComponent,
    },
    {
      path :'inquiry',
      component:UserInquiryComponent
    },
    {
      path:'userreports',
      component : UserReportsComponent
    }
    ]
  },

  {
    path: 'admindashboard',
    component: UserdahboardComponent,
    children: [{
      path: 'intake',
      component: IntakeComponent,
    
    },
    {
      path: 'invite',
      component: InvitelawyerComponent,
    
    },
    {
      path: 'roles',
      component: RolesComponent
    },
     {
      path: 'add',
      component: AddnewComponent,
      outlet: 'admindashboard'
    },
    {
      path: 'user',
      component: UserComponent,
    },
    {
      path :'admindocument',
      component:AdmindocumentComponent
    },
    {
      path: 'orders',
      component: OrdersComponent,
  
    },
    {
      path: 'trademarks',
      component: TrademarksComponent,
    
      
    },
    {
      path:'trademark/:id',
      component:TradeDetailComponent,
    },
    {
      path: 'myprofile',
      component: MyprofileComponent,
      outlet: 'admindashboard'
    }, {
      path: 'tradeinfo/:id',
      component: TradeinfoComponent,
    },
   

    ]
  },


 

  {
    path: 'payment',
    component: CheckedComponent
  },

  {
    path: 'check',
    component: CheckinComponent
  },
  {
    path: 'tm1',
    component: TmComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: "zoro",
    component: NgzorooComponent
  },
 
  {
    path: "lawyerdashboard",
    component: LawyerdashboardComponent,
    children: [{
      path: 'setting',
      component: SettingComponent,
      outlet: 'lawyerdashboard'
    }]
  },
  {
    path: 'checkOut',
    component: CheckoutComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
