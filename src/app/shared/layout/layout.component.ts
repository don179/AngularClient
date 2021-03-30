import { Component, OnInit, Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { Login } from '../login.model';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnChanges {

  public isAuthenticated : boolean; 
  public isTournament : boolean; 
  public isEvent : boolean; 
  public isEventDetail : boolean; 

  public service: LoginService;

  elemEventaccess: any;
  elemEventdetailaccess: any;
  elemTournaccess: any;
  elemFullaccess: any;
  elemEvent_eventdetailsaccess: any;
  elemTourn_eventaccess: any;
  elemTourn_eventdetailaccess: any;
  login: Login;
  elem_menuTourn: any;
  elem_menuEvent: any;
  elem_menuEventDetail: any;
  elem_menufunction: any;

  @Input() childMessage: Login;
  
  constructor(public lservice: LoginService) 
  { 
    this.service = lservice;
    this.isAuthenticated = false; 
    this.isTournament = false;  
    this.isEvent = false;  
    this.isEventDetail = false; 
    this.login = new Login;
    ///this.resetElements(); 
  }

  resetElements()
  {
    this.elemEventaccess = document.getElementById("eventaccess");
    this.elemEventaccess.style.display = 'none';
    this.elemEventdetailaccess = document.getElementById("eventdetailaccess");
    this.elemEventdetailaccess.style.display = 'none';
    this.elemTournaccess = document.getElementById("tournaccess");
    this.elemTournaccess.style.display = 'none';
    this.elemFullaccess = document.getElementById("fullaccess");
    this.elemFullaccess.style.display = 'none';
    this.elemEvent_eventdetailsaccess = document.getElementById("event&eventdetailsaccess");
    this.elemEvent_eventdetailsaccess.style.display = 'none';
    this.elemTourn_eventaccess = document.getElementById("tourn&eventaccess");
    this.elemTourn_eventaccess.style.display = 'none';
    this.elemTourn_eventdetailaccess = document.getElementById("tourn&eventdetailaccess");
    this.elemTourn_eventdetailaccess.style.display = 'none';
    this.elem_menuTourn = document.getElementById("menu_tournament");
    this.elem_menuTourn.style.display = 'none';
    this.elem_menuEvent = document.getElementById("menu_event");
    this.elem_menuEvent.style.display = 'none';
    this.elem_menuEventDetail = document.getElementById("menu_eventdetail");
    this.elem_menuEventDetail.style.display = 'none';
    this.elem_menufunction = document.getElementById("menufunction");
    this.elem_menufunction.style.display = 'none';
  }

  ngOnChanges(changes: SimpleChanges) 
  {
    this.resetElements();
    
    let currentVal = changes.currentValue;
    let previousValue = changes.previousValue;
    let firstchange = changes.firstchange;

    //const inPutLogin = changes['loginInp'];

    console.log(currentVal);
    console.log(previousValue);
    console.log(firstchange);

    this.login = this.childMessage;

    this.doExecute();
           
  }


  doExecute()
  {

    // this.service.getActiveLogin()
    // .subscribe(data => this.login = data);

      if (this.login.UserId > -1)
      {
        this.isAuthenticated = true;        

        if (this.login.RoleDescription == RoleStatus.Event.toString())     
          this.elemEventaccess.style.display = 'block';          
        else if (this.login.RoleDescription == RoleStatus["Event Detail"].toString())    
          this.elemEventdetailaccess.style.display = 'block';       
        else if (this.login.RoleDescription == RoleStatus.Tournament.toString())     
          this.elemTournaccess.style.display = 'block';          
        else if (this.login.RoleDescription == RoleStatus["Full Access"].toString())      
          this.elemFullaccess.style.display = 'block';         
        else if (this.login.RoleDescription == RoleStatus["Event, Event Detail"].toString())   
          this.elemEvent_eventdetailsaccess.style.display = 'block';        
        else if (this.login.RoleDescription == RoleStatus["Tournament, Event"].toString())    
          this.elemTourn_eventaccess.style.display = 'block';        
        else if (this.login.RoleDescription == RoleStatus["Tournament, Event Detail"].toString())    
          this.elemTourn_eventdetailaccess.style.display = 'block';
      }  
  }

  // ngOnDestroy() {
  // }

  eventDetailClick() 
  {
    this.elem_menufunction.style.display = 'block';
    this.elem_menuEventDetail.style.display = 'block';
    this.elem_menuTourn.style.display = 'none';
    this.elem_menuEvent.style.display = 'none';
  }

  eventClick()
  {
    this.elem_menufunction.style.display = 'block';
    this.elem_menuEvent.style.display = 'block';
    this.elem_menuEventDetail.style.display = 'none';
    this.elem_menuTourn.style.display = 'none';

  }

  tournamentClick()
  {
    this.elem_menufunction.style.display = 'block';
    this.elem_menuTourn.style.display = 'block';
    this.elem_menuEventDetail.style.display = 'none';
    this.elem_menuEvent.style.display = 'none';
  }



}

enum RoleStatus {
  ['Full Access'] = 'Full Access',
  ['Tournament, Event'] = 'Tournament, Event',
  ['Tournament, Event Detail'] = 'Tournament, Event Detail',
  ['Event, Event Detail'] = 'Event, Event Detail',
  ['Tournament'] = 'Tournament',
  ['Event'] = 'Event',
  ['Event Detail'] = 'Event Detail'
}
