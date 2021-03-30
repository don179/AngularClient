import { Component, OnInit } from '@angular/core';
import { EventdetailsService } from 'src/app/shared/eventdetails.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})

export class EventdetailComponent implements OnInit {

  constructor(public service: EventdetailsService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
        EventDetailID : null,
        EventDetailName: '',
        EventDetailNumber: null,
        EventDetailOdd: null,
        FinishingPosition: null,
        FirstTimer: null,
        EventDetailStatusName: null,
        FK_EventID: null
    }
  }


  onSubmit(form: NgForm) {
    if (form.value.EventDetailID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEventDetail(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Event Detail Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putEventDetail(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Event Detail Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}