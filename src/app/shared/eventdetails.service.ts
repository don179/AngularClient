import { Injectable } from '@angular/core';
import { Eventdetail } from './eventdetail.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs"; 

@Injectable({
  providedIn: 'root'
})
export class EventdetailsService {

  formData  : Eventdetail;
  list : Eventdetail[];
  readonly rootURL = "http://localhost:57675/api";

  constructor(private http : HttpClient) { }

  postEventDetail(formData : Eventdetail){
    return this.http.post(this.rootURL+'/EventDetails',formData);
   }
 
 
   refreshList(){
     this.http.get(this.rootURL+'/EventDetails')
     .toPromise().then(res => this.list = res as Eventdetail[]);
   }
 
   
  putEventDetail(formData : Eventdetail){
    return this.http.put(this.rootURL+'/EventDetails',formData);
    }


  deleteEventDetail(id : number){
    return this.http.delete(this.rootURL+'/EventDetails/'+id);
  }  

  // ngOnDestroy() {
    
  // }

}
