import { Component, OnInit, OnDestroy, Directive } from '@angular/core';
import { Router } from '@angular/router';  

import { LoginService } from 'src/app/shared/login.service';
import { Login } from '../shared/login.model';
import { TournamentsService } from '../shared/tournaments.service';
import { EventsService } from '../shared/events.service';
import { EventdetailsService } from '../shared/eventdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private isAuthenticated: boolean;  
  private login: Login;
  elemLayout: any;
  elemLogin: any;
  elemLogout: any;
  message: Login; 
  childMessage: Login;

  constructor(
    private router: Router, 
    private service: LoginService,
    private TounService: TournamentsService,
    private EventService: EventsService,
    private EventDetailService: EventdetailsService
    ) 
  {         
    this.isAuthenticated = false;
    this.login = new Login;
  }

  ngOnInit() {  
    this.elemLayout.style.display = 'none';
    this.elemLogin.style.display = 'block';
    this.elemLogout.style.display = 'none';
    this.isAuthenticated = false;

    // this.service.getActiveLogin()
    // .subscribe(data => this.login = data);          
  } 


  receiveMessage($event) {
    
    this.message = $event;
    this.childMessage = this.message;
    
    console.log("this.message is " + this.message);

    if (this.message.UserId > -1)
    {
      this.isAuthenticated = true;
      this.elemLayout.style.display = 'block';
      this.elemLogin.style.display = 'none';
      this.elemLogout.style.display = 'block';
    }
    else
    {
      this.isAuthenticated = false;
      this.elemLayout.style.display = 'none';
      this.elemLogin.style.display = 'block';
      this.elemLogout.style.display = 'none';
    }
  }
    
  logout() { 

    this.login.Password = '';
    this.login.RoleDescription = '';
    this.login.RoleID = -1;
    this.login.UserId = -1;
    this.login.UserName = '';

    // this.service.ngOnDestroy(); 
    // this.TounService.ngOnDestroy();
    // this.EventService.ngOnDestroy();
    // this.EventDetailService.ngOnDestroy();    
    
    this.isAuthenticated = false;

    //this.ngOnDestroy();
    //this.ngOnInit();
    //this.subscription.unsubscribe();
    
    this.elemLayout.style.display = 'none';
    this.elemLogin.style.display = 'block';
    this.elemLogout.style.display = 'none';

  }  
} 