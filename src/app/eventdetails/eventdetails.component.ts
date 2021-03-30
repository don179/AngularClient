import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { EventdetailsService } from 'src/app/shared/eventdetails.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})

export class EventdetailsComponent implements OnInit {

  constructor(private router: Router) { } 

  ngOnInit(): void {
  }

}