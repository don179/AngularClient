import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Login } from "src/app/shared/login.model";
import { NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';
import * as CryptoJS from 'crypto-js';  
import { Observable, empty, of } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  
  readonly rootURL = "http://localhost:57675/api";
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  isAuthenticated: boolean;
  login: Login;
  formData: Login;
  conversionEncryptOutput: any;
  keySize: number;
  ivSize: number;
  iterations: number;

  constructor(private http : HttpClient, lformData: Login, llogin: Login) { 
    this.isAuthenticated = false;
    //this.login = new Login;
    this.formData = lformData;
    let keySize = 256;
  let ivSize = 128;
  let iterations = 100;
  this.login = llogin;
  }

  postRegisterLogon(formData: Login) {    
    return this.http.post(this.rootURL + '/Users', formData);
   }

  putRegisterLogon(formData: Login) {    
    return this.http.put(this.rootURL + '/Users', formData);
  }

  /*getEncryption(plainString: String)
  {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(plainString, salt);
    return hash;
  }

  getDecryption(plainString: String, hash: any): boolean
  {
    let boolRes = bcrypt.compareSync(plainString, hash); // true
    bcrypt.compareSync(plainString, hash); // false    
    return boolRes;
  }*/

  // resetLogin()
  // {
  //   this.login.UserName = '';
  //   this.login.Password = '';
  //   this.login.RoleDescription = '';
  //   this.login.RoleID = -1;
  //   this.login.UserId = -1;
  // }

  // setLogin(formData: Login)
  // {
  //   this.login.UserName = formData.UserName;
  //   this.login.Password = formData.Password;
  //   this.login.RoleDescription = '';
  //   this.login.RoleID = -1;
  //   this.login.UserId = -1;
  // }

  
  /*getActiveLogin(): Observable<Login>
  {
    //Registeration will hash password and store hash in db
    let hash = this.getEncryption(this.login.Password);        

    let uri = this.rootURL + '/Users?UserName='+this.login.UserName+'&Password='+this.login.Password;
    //Login will authenticate with hash password
    var res = this.http.get<Login>(uri);

    let isDecyprted = this.getDecryption(this.login.Password, hash);

    if (isDecyprted)
      this.isAuthenticated = true;
    else
      this.isAuthenticated = false;

      return res;      
  }*/

  getActiveLogin(): Observable<Login>
  {
     return this.http.get<Login>(this.rootURL+ '/Users?UserName='+this.login.UserName+'&Password='+this.login.Password);
     //.toPromise().then(res => this.login = res);
  }

 
  getLogin(formData: Login) {   
    
    this.login = formData;

    var message = formData.Password;
    var password = "Secret Password";

    var encrypted = this.encrypt(message, password);
    formData.Password = encrypted;

    var decrypted = this.decrypt(encrypted, password);
      
    console.log("password:     " + password);
    console.log("original message:    " + message);
    console.log("encrypted password:   " + encrypted);
    console.log("decrypted password:   " + decrypted); 

      

    console.log("this.login.Password:     " + this.login.Password);
    console.log("this.login.UserId:    " + this.login.UserId);
    console.log("this.login.UserName:   " + this.login.UserName);
    console.log("this.login.RoleDescription:   " + this.login.RoleDescription); 

    console.log("formData.Password:     " + formData.Password);
    console.log("formData.UserId:    " + formData.UserId);
    console.log("formData.UserName:   " + formData.UserName);
    console.log("formData.RoleDescription:   " + formData.RoleDescription); 

    //return this.login;
    
  }

  
  deleteEvent(id : number) {
    return this.http.delete(this.rootURL + '/Users/'+id);
  } 

  // ngOnDestroy() {
  //   this.isAuthenticated = false;
  //   this.list = null;
  //   //this.isAuthenticatedChange = null;
  // }

  encrypt (msg, pass) {
    var salt = CryptoJS.lib.WordArray.random(128/8);
    
    var key = CryptoJS.PBKDF2(pass, salt, {
        keySize: this.keySize/32,
        iterations: this.iterations
      });
  
    var iv = CryptoJS.lib.WordArray.random(128/8);
    
    var encrypted = CryptoJS.AES.encrypt(msg, key, { 
      iv: iv, 
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
      
    });
    
    // salt, iv will be hex 32 in length
    // append them to the ciphertext for use  in decryption
    var transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
    return transitmessage;
  }
  
  decrypt (transitmessage, pass) {
    var salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
    var iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32))
    var encrypted = transitmessage.substring(64);
    
    var key = CryptoJS.PBKDF2(pass, salt, {
        keySize: this.keySize/32,
        iterations: this.iterations
      });
  
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
      iv: iv, 
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
      
    })
    return decrypted;
  }
}
