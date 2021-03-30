import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable } from "rxjs"; 

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  formData  : Event;
  list : Event[];
  readonly rootURL = "http://localhost:57675/api";
  
  constructor(private http : HttpClient) { }

  postEvent(formData : Event){
    return this.http.post(this.rootURL+'/Events',formData);
   }
 
 
   refreshList(){
     this.http.get(this.rootURL+'/Events')
     .toPromise().then(res => this.list = res as Event[]);
   }
 
 
   putEvent(formData : Event){
     return this.http.put(this.rootURL+'/Events/'+formData.EventID,formData);
    }
 
 
    deleteEvent(id : number){
     return this.http.delete(this.rootURL+'/Events/'+id);
    }

    // ngOnDestroy() {
    
    // }

  }
