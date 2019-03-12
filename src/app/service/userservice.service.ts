import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment  } from "../../environments/environment";
//import { MainUrl } from '../main-url';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
          
  servicUrl= environment.baseUrl;
  constructor(private http : HttpClient) { }

  registerUser(payload) {
    return this.http.post( this.servicUrl +`/user/signUp`, payload);
  }
  loginUser(payload){
    return this.http.post( this.servicUrl +'/user/', payload)
  }
  list(){
    return this.http.get( this.servicUrl +'/trademark');
  }
  getTm() {
    return this.http.get(`${this.servicUrl}/registerTrademark/getTm1/1`);
  }
  getPrice(){
    return this.http.get(`${this.servicUrl}/price/addpaymenttype`)
  }
  getAllusers(){
    return this.http.get(`${this.servicUrl}/users/all`);
  }
  usersearch(payload){
    console.log(payload);
    return this.http.post(`${this.servicUrl}/registerTrademark/addTrademark`, payload);
  }
  sendemail(payload){
    return this.http.post(`${this.servicUrl}/mail/email`,payload);
  }
  getAlltrademark(){
    return this.http.get(`${this.servicUrl}/registerTrademark/getTrademark`)
  }
}
