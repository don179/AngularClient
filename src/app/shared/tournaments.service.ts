import { Injectable } from '@angular/core';
import { Tournament } from './tournament.model';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable } from "rxjs"; 

@Injectable({
  providedIn: 'root'
})
export class TournamentsService {

  formData  : Tournament;
  list : Tournament[];
  readonly rootURL = "http://localhost:57675/api";

  constructor(private http : HttpClient) { }

  postTournament(formData : Tournament){
    return this.http.post(this.rootURL+'/Tournaments',formData);
   }
 
 
   refreshList(){
     this.http.get(this.rootURL+'/Tournaments')
     .toPromise().then(res => this.list = res as Tournament[]);
   }
 
 
   putTournament(formData : Tournament){
     return this.http.put(this.rootURL+'/Tournaments/',formData);
    }
 
 
    deleteTournament(id : number){
     return this.http.delete(this.rootURL+'/Tournaments/'+id);
    }

    // ngOnDestroy() {
    
    // }

  }