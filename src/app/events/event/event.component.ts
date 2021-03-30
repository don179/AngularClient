import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/events.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {

  constructor(public service: EventsService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
      EventID: null,
      FK_TournamentID: null,
      EventName: '',
      EventNumber: null,
      EventDateTime: '',
      EventEndDateTime: '',
      AutoClose: null
    }
  }


  onSubmit(form: NgForm) {
    if (form.value.EventID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEvent(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Event Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putEvent(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Event Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}