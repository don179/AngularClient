import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TournamentsService } from 'src/app/shared/tournaments.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})


export class TournamentsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
