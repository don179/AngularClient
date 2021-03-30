import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/events.service';
import { Event } from 'src/app/shared/event.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs"; 
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})


export class EventListComponent implements OnInit {
  p1: number = 1;
  searchTexte: string;
  
  constructor(public service: EventsService,

    private toastr: ToastrService) { }

    ngOnInit() {

      this.service.refreshList();
  
    }
  
    populateForm(_event: Event) {
      this.service.formData = Object.assign({}, _event);
    }

  
    onDelete(id: number) {
  
      if (confirm('Are you sure to delete this record?')) {
        this.service.deleteEvent(id).subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Event Register');
        });

      }
    }

    onRefresh(id: number) {

      this.service.refreshList();

      }
  }
