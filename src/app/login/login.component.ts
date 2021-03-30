import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { Login } from 'src/app/shared/login.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, empty } from "rxjs"; 
import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';  
import { FormsModule }   from '@angular/forms';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { stringify } from 'querystring';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
//declare var jsSHA: any;

import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

   public lservice: LoginService;
   public formData: Login;
   public isAuthenticated: boolean;
   public login: Login;
   public _form: NgForm;
   sharObj: any;
   
   message: Login;

   @Output() messageEvent = new EventEmitter<Login>();

   constructor(
     public service: LoginService
     ) 
     {
      this.lservice = service;

     //this.service = lservice;
     this.formData = new Login;
     this.isAuthenticated = false;
     this.login = new Login;
     //jsSHA = new jsSHA;
     //this.sharObj = new jsSHA;
     
  }

  ngOnInit() { 
  }

  onSubmit(form: NgForm) {
    this.authenticateUser(form);
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  /*authenticateUser(form: NgForm) {
    /*var message = "Hello World";
    var password = "Secret Password";

    var encrypted = js.encrypt   js.encrypted(message, password);
    var decrypted = decrypt(encrypted, password);


    this.lservice.getLogin(form.value);
    this.lservice.getActiveLogin()
    .subscribe(data => this.isAuthenticated = data);

    if (this.login.UserId > -1)
      this.isAuthenticated = true;
    else
      this.isAuthenticated = false;
    
    form.resetForm();  
  }*/

  //ngOnDestroy() {
  //}*/

  authenticateUser(form: NgForm) {
        
    this.lservice.getLogin(form.value);

    console.log(this.login.UserName);
    console.log(this.login.RoleDescription);

    this.lservice.getActiveLogin().subscribe();

    console.log(this.lservice.login.UserName);
    console.log(this.lservice.login.RoleDescription);

    //if (message = decrypted) {
    //if (this.login.UserId > 0) 
    //{
        this.isAuthenticated = true;
        this.message = this.login;
        this.sendMessage();
    //}
   // else
    //{
    //  console.log(this.login.UserId);

    //    this.isAuthenticated = false;
     //   alert('Not Authenticated!' + this.login.UserId);
        //this.lservice.resetLogin();
        
    //}  
    form.resetForm();
  }

  
}