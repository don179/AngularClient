import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { EventsService } from 'src/app/shared/events.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})


export class EventsComponent implements OnInit {

  constructor(private router: Router) { } 

  ngOnInit(): void {
  }
}
