import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentComponent } from './tournaments/tournament/tournament.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { EventdetailComponent } from './eventdetails/eventdetail/eventdetail.component';
import { EventdetailListComponent } from './eventdetails/eventdetail-list/eventdetail-list.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { TournamentListComponent } from './tournaments/tournament-list/tournament-list.component';
import { TournamentsService } from './shared/tournaments.service';
import { EventsService } from './shared/events.service';
import { EventdetailsService } from './shared/eventdetails.service';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';  
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './shared/layout/layout.component'; 
import { LoginService }  from './shared/login.service';
import { Login } from './shared/login.model';
import { NewHomePageComponent } from './new-home-page/new-home-page.component';

 const appRoutes: Routes = [
     { path: 'EventDetails', component: EventdetailsComponent },
     { path: 'Events', component: EventsComponent },
     { path: 'Tournaments', component: TournamentListComponent },
     { path: 'Home', component: HomeComponent },
     { path: 'Login', component: LoginComponent },
     { path: 'Layout', component: LayoutComponent }

 ];

@NgModule({

  declarations: [
    AppComponent,
    TournamentsComponent,
    TournamentComponent,
    TournamentListComponent,
    EventsComponent,
    EventComponent,
    EventListComponent,
    EventdetailsComponent,
    EventdetailComponent,
    EventdetailListComponent,
    LoginComponent,
    HomeComponent,
    LayoutComponent,
    NewHomePageComponent
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //HttpClient,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(appRoutes)
  ],

  exports: [RouterModule],

  providers: [TournamentsService, EventsService, EventdetailsService, LoginService, Login],  

  bootstrap: [AppComponent]
})

export class AppModule { }